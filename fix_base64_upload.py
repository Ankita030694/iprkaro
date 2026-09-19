import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# Replace the block where imageUrl is assigned to newBlog
old_block = r"""      const \{ imageUrl \} = await response\.json\(\);
      
      setNewBlog\(prevState => \(\{ \.\.\.prevState, image: imageUrl \}\)\);
      setImagePreview\(imageUrl\);
      alert\('AI image generated successfully!'\);"""

new_block = """      let finalImageUrl = await response.json().then(data => data.imageUrl);
      
      if (finalImageUrl.startsWith('data:image/')) {
        // Base64 image from OpenAI API; upload to Firebase Storage to prevent Firestore 1MB limit crash
        setGenerationStep("Uploading AI image to cloud...");
        const responseData = await fetch(finalImageUrl);
        const blob = await responseData.blob();
        
        const storageRef = ref(storage, `blog-images/ai-generated-${Date.now()}.png`);
        const snapshot = await uploadBytes(storageRef, blob);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }
      
      setNewBlog(prevState => ({ ...prevState, image: finalImageUrl }));
      setImagePreview(finalImageUrl);
      alert('AI image generated successfully!');"""

content = re.sub(old_block, new_block, content)

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)

