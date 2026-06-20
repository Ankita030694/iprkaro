import re

with open("src/app/authority/blogs/page.tsx", "r") as f:
    content = f.read()

# Remove the Q&A / Reviews column header
content = content.replace('<th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>', '')

# Remove the Q&A / Reviews column data
# It looks like:
# <td className="p-4">
#   <div className="flex gap-2 items-center">
#     <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
#       {blog.faqs?.length || 0} FAQs
#     </span>
#     <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-[10px] font-extrabold text-[#B8860B]">
#       {blog.reviews?.length || 0} Reviews
#     </span>
#   </div>
# </td>
td_pattern = r'<td className="p-4">\s*<div className="flex gap-2 items-center">\s*<span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-\[10px\] font-extrabold text-blue-700">\s*\{blog\.faqs\?\.length \|\| 0\} FAQs\s*</span>\s*<span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-\[10px\] font-extrabold text-\[#B8860B\]">\s*\{blog\.reviews\?\.length \|\| 0\} Reviews\s*</span>\s*</div>\s*</td>'
content = re.sub(td_pattern, '', content)

# Replace dark goldenrod with IPR Karo Yellow
content = content.replace('#B8860B', '#FFB400')
# Replace dark goldenrod hover with IPR Karo Yellow hover
content = content.replace('#9E7307', '#E5A200')

with open("src/app/authority/blogs/page.tsx", "w") as f:
    f.write(content)
