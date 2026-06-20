import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# 1. Rename primaryKeyword to writeupInput
content = content.replace('const [primaryKeyword, setPrimaryKeyword] = useState(\'\');', 'const [writeupInput, setWriteupInput] = useState(\'\');')
content = content.replace('primaryKeyword', 'writeupInput')
content = content.replace('setPrimaryKeyword', 'setWriteupInput')

# 2. Add generationStep and generationError states
state_insert = """const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [generationError, setGenerationError] = useState('');"""
content = re.sub(r'const \[isGenerating, setIsGenerating\] = useState\(false\);', state_insert, content)

# 3. Remove expansionSubtopics and imagePrompt states
content = re.sub(r'const \[imagePrompt, setImagePrompt\] = useState\(\'\'\);\n\s*', '', content)
content = re.sub(r'const \[expansionSubtopics, setExpansionSubtopics\] = useState\(\'\'\);\n\s*', '', content)
content = re.sub(r'const \[isExpanding, setIsExpanding\] = useState\(false\);\n\s*', '', content)

# 4. Remove handleExpandDescription function entirely
content = re.sub(r'const handleExpandDescription = async \(\) => \{[\s\S]*?finally \{\s*setIsExpanding\(false\);\s*\}\s*\};\n', '', content)

# 5. Update handleGenerateImage to use window.prompt
handle_image_new = """const handleGenerateImage = async () => {
    const defaultPrompt = newBlog.title 
      ? `A professional, high-quality illustration representing: ${newBlog.title}`
      : "A professional illustration with premium high-quality digital art";
    
    const userPrompt = window.prompt("Enter the prompt for the AI image generator:", defaultPrompt);
    if (userPrompt === null) return; // User cancelled

    const finalPrompt = userPrompt.trim() || defaultPrompt;

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');
      const { imageUrl } = await response.json();
      
      setNewBlog(prevState => ({ ...prevState, image: imageUrl }));
      setImagePreview(imageUrl);
      alert('AI image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };"""
content = re.sub(r'const handleGenerateImage = async \(\) => \{[\s\S]*?finally \{\s*setIsGeneratingImage\(false\);\s*\}\s*\};', handle_image_new, content)

# 6. Update handleGenerate (which is now called handleGenerate but uses writeupInput) to include steps
handle_gen_old = r'const handleGenerate = async \(\) => \{[\s\S]*?finally \{\s*setIsGenerating\(false\);\s*\}\s*\};'
handle_gen_new = """const handleGenerateContent = async () => {
    if (!writeupInput.trim()) {
      alert("Please paste the writeup first.");
      return;
    }
    setIsGenerating(true);
    setGenerationError("");
    setGenerationStep("Connecting to ChatGPT...");

    try {
      const steps = [
        "Analyzing writeup context...",
        "Drafting click-worthy title & URL slug...",
        "Structuring 3,000+ words detailed legal analysis...",
        "Drafting 10+ statutory FAQs...",
        "Synthesizing 5+ client review snippets...",
        "Formatting outputs..."
      ];

      let currentStepIdx = 0;
      setGenerationStep(steps[0]);
      
      const interval = setInterval(() => {
        if (currentStepIdx < steps.length - 1) {
          currentStepIdx++;
          setGenerationStep(steps[currentStepIdx]);
        }
      }, 5000);

      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primaryKeyword: writeupInput }),
      });

      clearInterval(interval);

      if (!response.ok) {
        const errData = await response.json().catch(()=>({}));
        throw new Error(errData.error || "Failed to generate blog");
      }
      
      const generatedData = await response.json();

      setNewBlog(prevState => ({
        ...prevState,
        title: generatedData.title || prevState.title,
        subtitle: generatedData.subtitle || prevState.subtitle,
        description: generatedData.description || prevState.description,
        metaTitle: generatedData.metaTitle || prevState.metaTitle,
        metaDescription: generatedData.metaDescription || prevState.metaDescription,
        slug: generatedData.slug || (generatedData.title ? generateSlug(generatedData.title) : prevState.slug),
        faqs: generatedData.faqs || prevState.faqs,
        reviews: generatedData.reviews || prevState.reviews,
      }));
      alert('✨ Blog contents populated successfully! Please verify fields, upload a cover image, and publish.');
      setWriteupInput(""); // clear writeup input
    } catch (err: any) {
      console.error('Error generating blog:', err);
      setGenerationError(err.message || 'Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
      setGenerationStep("");
    }
  };"""
content = re.sub(handle_gen_old, handle_gen_new, content)

# 7. Add Autofill function
autofill_fn = """  const handleAutofillTestData = () => {
    const uniqueId = Math.floor(1000 + Math.random() * 9000);
    const mockTitle = `Defeating Bank Harassment & Loan Overdue Settlement in 2026 (Guide ${uniqueId})`;
    
    setNewBlog({
      title: mockTitle,
      subtitle: "A comprehensive legal analysis of your rights and advocate remedies.",
      image: "https://via.placeholder.com/1200x630?text=Auto+Generated+Banner",
      date: new Date().toISOString().split('T')[0],
      description: `<h2>Understanding Your Rights as a Loan Debtor</h2><p>Many individuals face overwhelming stress when banks employ collection agencies. However, debtors are legally protected.</p>`,
      slug: `defeating-bank-harassment-${uniqueId}`,
      metaTitle: `${mockTitle} | AMA Legal Solutions`,
      metaDescription: `Discover the statutory legal steps to settle outstanding loans and handle bank recovery harassment.`,
      faqs: [{ question: "What is an OTS?", answer: "One-Time Settlement." }],
      reviews: [{ name: "Rajesh Kumar", rating: 5, review: "Great service!", date: new Date().toISOString().split('T')[0] }],
      author: "Anuj Anand Malik",
      created: Date.now()
    });
    setImagePreview("https://via.placeholder.com/1200x630?text=Auto+Generated+Banner");
  };"""
# Insert after resetForm
content = content.replace('  const resetForm = () => {', autofill_fn + '\n\n  const resetForm = () => {')

# 8. Replace form header & AI generator tools area
# Let's find the exact string to replace using regex
form_header_regex = r'\{/\* Form Header \*/\}(.*?)<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">'
# We will construct the new UI block based on the snippet
new_form_header_and_ai = """{/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowBlogForm(false)}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {formMode === 'add' && (
                  <button
                    type="button"
                    onClick={handleAutofillTestData}
                    className="bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#FFB400] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>⚡ Autofill Test Data</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleRecoverDraft()}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  title="Check autosaved version"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-xs" />
                  <span>Restore Draft</span>
                </button>
              </div>
            </div>

            {/* AI Writeup Generator Card */}
            {formMode === 'add' && (
              <div className="p-6 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#FFB400] text-xs font-bold animate-pulse">✨</span>
                    <div>
                      <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                        AI Writeup Auto-Generator (ChatGPT)
                      </h3>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                        Paste the raw writeup below. ChatGPT will automatically draft the title, subtitle, slug, 3,000+ words detailed rich blog post, 10+ FAQ schemas, and 5+ client reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <textarea
                    value={writeupInput}
                    onChange={(e) => setWriteupInput(e.target.value)}
                    rows={5}
                    placeholder="Paste the raw writeup text, draft notes, or transcripts for the legal blog here..."
                    className="w-full p-4 bg-white border border-slate-200 focus:border-[#FFB400] focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none placeholder-slate-400 shadow-sm transition-all"
                    disabled={isGenerating}
                  />

                  {generationError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-start gap-2">
                      <span className="text-sm">⚠️</span>
                      <span>{generationError}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-2.5">
                      {isGenerating && (
                        <div className="flex items-center gap-2">
                          <span className="animate-spin text-[#FFB400] text-sm">💫</span>
                          <span className="text-[11px] font-bold text-slate-650 animate-pulse">
                            {generationStep}
                          </span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleGenerateContent}
                      disabled={isGenerating || !writeupInput.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-2.5 bg-[#FFB400] hover:bg-[#E5A200] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      {isGenerating ? (
                        <>
                          <span className="animate-spin text-xs">💫</span>
                          <span>Generating Content...</span>
                        </>
                      ) : (
                        <>
                          <span>✨ Generate Blog with AI</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">"""

content = re.sub(form_header_regex, new_form_header_and_ai, content, flags=re.DOTALL)

# 9. Replace Image Input row to match snippet
image_input_regex = r'\{/\* Image Upload \*/\}(.*?)\{/\* Image Preview Block \*/\}'
new_image_input = """{/* Image Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="image"
                    required
                    value={newBlog.image}
                    onChange={handleInputChange}
                    placeholder="URL or upload local file"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#FFB400] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Upload cover image"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateImage}
                    disabled={isGeneratingImage}
                    className="px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#FFB400] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    title="Generate cover image with AI"
                  >
                    <span>{isGeneratingImage ? '💫 Generating...' : '✨ Generate AI'}</span>
                  </button>
                </div>
                {uploading && (
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div className="bg-[#FFB400] h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Preview Block */}"""
content = re.sub(image_input_regex, new_image_input, content, flags=re.DOTALL)

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)

