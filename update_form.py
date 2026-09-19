import re

with open('src/components/common/ContactForm.tsx', 'r') as f:
    content = f.read()

# Container background
content = re.sub(
    r'style=\{\{\n\s*background: `linear-gradient\(0deg, rgba\(0, 0, 0, 0\.50\) 0%, rgba\(0, 0, 0, 0\.50\) 100%\), linear-gradient\(145deg, rgba\(12, 0, 43, 0\.40\) 6\.6%, rgba\(255, 183, 3, 0\.40\) 120\.24%\), rgba\(0, 0, 0, 0\.50\)`,\n\s*boxShadow: \'0 0 20px 0 rgba\(255, 255, 255, 0\.31\) inset\',\n\s*backdropFilter: \'blur\(31\.7px\)\',\n\s*WebkitBackdropFilter: \'blur\(31\.7px\)\'\n\s*\}\}',
    r'''style={isPopup ? {
          borderRadius: '20px',
          background: 'linear-gradient(0deg, #FFF 0%, #8FD4FF 100%)',
          boxShadow: '0 4px 23.1px 0 rgba(0, 0, 0, 0.15)'
        } : {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
          boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
          backdropFilter: 'blur(31.7px)',
          WebkitBackdropFilter: 'blur(31.7px)'
        }}''', 
    content
)

# Title
content = content.replace(
    '<h2 className="text-white text-lg sm:text-2xl font-nunito font-bold mb-3 text-center">',
    '<h2 className="text-black text-lg sm:text-2xl font-nunito font-bold mb-3 text-center">'
)
content = content.replace(
    '<span className="text-[#FFB703]">Free Expert</span>',
    '<span className="text-black">Free Expert</span>'
)

# Labels
content = content.replace(
    '<label className={`block text-white font-nunito font-normal ${isPopup ? \'text-sm sm:text-base\' : \'text-base sm:text-lg\'}`}>',
    '<label className={`block font-nunito font-normal ${isPopup ? \'text-black text-sm sm:text-base\' : \'text-white text-base sm:text-lg\'}`}>'
)

# Div labels
content = content.replace(
    '<div className={`text-white font-nunito font-normal ${isPopup ? \'text-sm sm:text-base\' : \'text-base sm:text-lg\'}`}>',
    '<div className={`font-nunito font-normal ${isPopup ? \'text-black text-sm sm:text-base\' : \'text-white text-base sm:text-lg\'}`}>'
)

# Input wrappers
content = re.sub(
    r'className=\{`rounded-lg \$\{isPopup \? \'h-9 sm:h-11\' : \'h-10 sm:h-12\'\}`\}\n\s*style=\{\{ background: \'rgba\(255, 255, 255, 0\.15\)\' \}\}',
    r'''className={`rounded-lg overflow-hidden border ${isPopup ? 'h-9 sm:h-11 border-black/10 bg-white' : 'h-10 sm:h-12 border-transparent'}`}
                style={!isPopup ? { background: 'rgba(255, 255, 255, 0.15)' } : undefined}''',
    content
)

# Text inputs
content = content.replace(
    'className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm sm:text-base"',
    'className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base ${isPopup ? \'text-black placeholder-black/50\' : \'text-white placeholder-[rgba(255,255,255,0.6)]\'}`}'
)

# Select inputs
content = content.replace(
    'className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white border-0 outline-0 font-nunito text-sm sm:text-base appearance-none cursor-pointer"',
    'className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base appearance-none cursor-pointer ${isPopup ? \'text-black\' : \'text-white\'}`}'
)

# Option backgrounds
content = content.replace(
    'className="bg-[#0C002B] text-white"',
    'className={isPopup ? "bg-white text-black" : "bg-[#0C002B] text-white"}'
)

# Textarea wrappers
content = re.sub(
    r'className="rounded-lg"\n\s*style=\{\{ background: \'rgba\(255, 255, 255, 0\.15\)\' \}\}',
    r'''className={`rounded-lg overflow-hidden border ${isPopup ? 'border-black/10 bg-white' : 'border-transparent'}`}
              style={!isPopup ? { background: 'rgba(255, 255, 255, 0.15)' } : undefined}''',
    content
)

# Textarea inputs
content = content.replace(
    'className="w-full p-2.5 sm:p-3 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 resize-none font-nunito text-sm sm:text-base"',
    'className={`w-full p-2.5 sm:p-3 bg-transparent border-0 outline-0 resize-none font-nunito text-sm sm:text-base ${isPopup ? \'text-black placeholder-black/50\' : \'text-white placeholder-[rgba(255,255,255,0.6)]\'}`}'
)

# Radio SVGs
content = content.replace(
    '<circle cx="15" cy="15" r="14.5" stroke="white" strokeWidth="1" />',
    '<circle cx="15" cy="15" r="14.5" stroke={isPopup ? "black" : "white"} strokeWidth="1" />'
)
content = content.replace(
    '<circle cx="15" cy="15" r="6" fill="white" />',
    '<circle cx="15" cy="15" r="6" fill={isPopup ? "black" : "white"} />'
)

# Radio texts
content = content.replace(
    '<span className="text-[rgba(255,255,255,0.8)] font-nunito text-xs sm:text-sm font-normal">',
    '<span className={`font-nunito text-xs sm:text-sm font-normal ${isPopup ? \'text-black\' : \'text-[rgba(255,255,255,0.8)]\'}`}>'
)

# Hover style for radio
content = content.replace(
    'className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-white/5 p-1.5 sm:p-2 rounded-lg transition-colors"',
    'className={`flex items-center gap-2 sm:gap-3 cursor-pointer p-1.5 sm:p-2 rounded-lg transition-colors ${isPopup ? \'hover:bg-black/5\' : \'hover:bg-white/5\'}`}'
)

# Error texts
content = content.replace(
    '<p className="text-red-400 text-xs mt-1 font-nunito">',
    '<p className={`text-xs mt-1 font-nunito ${isPopup ? \'text-red-600\' : \'text-red-400\'}`}>'
)


with open('src/components/common/ContactForm.tsx', 'w') as f:
    f.write(content)

print("Done")
