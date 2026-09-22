import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for trademark-by-location/[slug]/page.tsx
    replacements = [
        (
            r"Having a unique identity is very important in today's market\. Whether your business is local or national, getting <strong>trademark registration in \{location\}</strong> is a key legal step\. It secures your brand ownership\. A trademark serves as the face of your business\. It turns your reputation, quality, and consumer trust into a recognizable name, logo, or slogan\.",
            r"A unique brand identity is vital today. <strong>Trademark registration in {location}</strong> is a key legal step. It secures your brand ownership. A trademark acts as the face of your business. It builds trust and loyalty among your consumers."
        ),
        (
            r"At IPR Karo, we simplify intellectual property laws for entrepreneurs, MSMEs, and large companies\. Handling trademark registration in \{location\} requires a clear understanding of the Trade Marks Act, 1999\. Our expert advocates draft your application carefully\. This minimizes government objections and gives you maximum legal protection\.",
            r"We simplify IP laws for all business types. Trademark registration in {location} requires knowing the Trade Marks Act, 1999. Our expert advocates draft your application carefully. This minimizes objections and maximizes your legal protection."
        ),
        (
            r"Many owners think that incorporating a company or buying a domain name gives them brand ownership\. This is a common mistake\. Without formal trademark registration in \{location\}, your business is at risk\. Competitors could legally register your brand name\. They could then force you to rebrand using a \"Cease and Desist\" notice\.",
            r"Many think a company or domain name guarantees brand ownership. This is a costly mistake. Without trademark registration in {location}, your business is at risk. Competitors might register your brand name. They could legally force you to rebrand."
        ),
        (
            r"Trademark registration in \{location\} gives you exclusive rights to use that mark for your goods or services\. It makes your brand more than just a local name\. It turns it into a valuable, legal asset\. You can use this asset for funding, franchising, and growing your business\.",
            r"Trademark registration in {location} grants you exclusive rights. It turns your brand into a valuable legal asset. You can use this asset for funding, franchising, and business growth."
        ),
        (
            r"Upon successful trademark registration in \{location\}, you gain the exclusive right to use the mark nationwide\. You can legally stop unauthorized third parties from using identical or confusingly similar marks\.",
            r"After trademark registration in {location}, you gain exclusive rights nationwide. You can easily stop others from using confusingly similar marks."
        ),
        (
            r"A registered trademark is an intellectual property asset\. It can be sold, commercially licensed, or franchised, opening up massive revenue streams for your business headquartered in \{location\}\.",
            r"A registered trademark is an important asset. You can sell, license, or franchise it. This opens new revenue streams for your business in {location}."
        ),
        (
            r"Using the ® symbol next to your brand name builds instant credibility\. It signals to your customers in \{location\} and beyond that your business is legitimate, authentic, and legally compliant\.",
            r"The ® symbol builds instant credibility. It shows customers in {location} that your business is legitimate and legally compliant."
        ),
        (
            r"If someone copies your registered brand, the legal burden of proof is significantly lower\. Trademark registration in \{location\} allows you to file direct infringement lawsuits and claim statutory damages\.",
            r"If someone copies your brand, proving it is easier. Trademark registration in {location} lets you file lawsuits and claim damages."
        ),
        (
            r"When applying for trademark registration in \{location\}, it is crucial to understand what exact elements of your brand identity can be protected\. The Indian Trade Marks Registry allows for various formats of graphical representation:",
            r"When seeking trademark registration in {location}, know what can be protected. The Registry allows various formats:"
        ),
        (
            r"Navigating intellectual property law requires attention to detail\. Our process for trademark registration in \{location\} offers full support\. We ensure zero administrative errors\.",
            r"Navigating IP law requires strict attention to detail. Our process for trademark registration in {location} provides full support. We ensure an error-free filing."
        ),
        (
            r"Before filing for trademark registration in \{location\}, we do a strict clearance search\. We check the Trade Marks Registry database for similar marks\.",
            r"Before filing for trademark registration in {location}, we do a strict clearance search. We check the official database for similar marks."
        ),
        (
            r"We look for phonetic, visual, and conceptual matches\. This ensures your brand name is legally available and safe from rejection\.",
            r"We look for phonetic and visual matches. This ensures your brand name is legally available and safe from rejection."
        ),
        (
            r"First, we select the correct Nice Classification for your goods or services\. Then, our attorneys draft the TM-A form\. We attach a legal User Affidavit if you already use the mark\.",
            r"First, we select the correct Nice Classification. Then, our attorneys draft the TM-A form. We attach a User Affidavit if you already use the mark."
        ),
        (
            r"Next, the Trademark Examiner reviews the application\. It is normal to receive objections under Section 9 or Section 11\.",
            r"Next, the Trademark Examiner reviews your application. It is normal to receive standard objections."
        ),
        (
            r"For trademark registration in \{location\}, our litigation team drafts a strong legal reply\. We use High Court precedents to resolve objections without a hearing\.",
            r"For trademark registration in {location}, our team drafts a strong legal reply. We use precedents to resolve objections quickly."
        ),
        (
            r"After the Examiner accepts your application, it gets published in the Trade Marks Journal\. This starts a 4-month opposition period\.",
            r"After acceptance, your application is published in the Trade Marks Journal. This starts a 4-month opposition period."
        ),
        (
            r"During this time, third parties can file a notice of opposition\. They can do this if they feel your trademark registration in \{location\} harms their prior rights\.",
            r"During this time, third parties can oppose the mark. They do this if they feel your registration in {location} harms their rights."
        ),
        (
            r"If no one opposes your mark within 4 months, the Registry enters it into the record\. You will then receive a digital Registration Certificate\.",
            r"If no one opposes it within 4 months, the Registry approves it. You then receive your digital Registration Certificate."
        ),
        (
            r"This completes your trademark registration in \{location\}\. You now have the legal right to use the ® symbol next to your brand\.",
            r"This completes your trademark registration in {location}. You now have the right to use the ® symbol."
        ),
        (
            r"To ensure a seamless filing experience, keep the following digital documents ready\. Our platform allows secure uploads for clients undergoing trademark registration in \{location\}\.",
            r"Keep these digital documents ready for a seamless filing experience. You can securely upload them on our platform."
        ),
        (
            r"During trademark registration in \{location\}, it is mandatory to classify your business activities under the Nice Classification system, which comprises 45 distinct classes \(Classes 1-34 for Goods, Classes 35-45 for Services\)\. Incorrect classification can lead to application rejection or inadequate protection\.",
            r"You must classify your business under the Nice Classification system. It has 45 distinct classes. Incorrect classification can lead to application rejection."
        ),
        (
            r"We believe in absolute transparency\. The fees associated with trademark registration in \{location\} are divided into statutory government fees and our professional legal service fees\.",
            r"We believe in absolute transparency. Fees for trademark registration in {location} include government fees and our professional fees."
        ),
        (
            r"Receiving an examination report with objections is a standard part of the process for trademark registration in \{location\}\. It does not mean your application is rejected\. Our elite legal team specializes in navigating the complex provisions of the Trade Marks Act to defend your application\.",
            r"Receiving an examination report with objections is standard. It does not mean rejection. Our legal team specializes in defending your application."
        ),
        (
            r"The Examiner may argue your mark lacks distinctiveness, is too descriptive of the goods/services, or contains common laudatory words\. Our advocates counter this by drafting exhaustive legal replies proving \"acquired distinctiveness\" through user affidavits and substantial evidence of secondary meaning generated by your \{location\} operations\.",
            r"The Examiner may argue your mark lacks distinctiveness. Our advocates counter this by drafting exhaustive legal replies. We prove acquired distinctiveness using your {location} operations data."
        ),
        (
            r"The Examiner may find your mark phonetically or visually similar to an already registered, existing trademark\. We dissect these objections by legally differentiating your brand based on class boundaries, target audience, visual trade dress, and the specific geographic channels of trade originating from \{location\}\.",
            r"The Examiner may find your mark similar to an existing one. We legally differentiate your brand based on class, audience, and trade channels in {location}."
        ),
        (
            r"Successfully achieving trademark registration in \{location\} is a major milestone, but intellectual property protection requires ongoing vigilance\.",
            r"Achieving trademark registration in {location} is a major milestone. However, IP protection requires ongoing vigilance."
        ),
        (
            r"A registered trademark in India is perpetually valid, provided it is renewed every 10 years\. We offer renewal tracking services for our \{location\} clients to ensure you never miss a deadline and risk having your mark removed from the registry\.",
            r"A registered trademark is valid for 10 years. We offer renewal tracking services for our {location} clients to prevent missed deadlines."
        ),
        (
            r"The Registry does not police the market for you\. Our watch services actively monitor the Trade Marks Journal to spot any third party attempting to register a mark similar to yours in \{location\} or nationwide, allowing us to file timely oppositions\.",
            r"The Registry does not police the market. Our watch services monitor the Journal to spot similar marks in {location}. We then file timely oppositions."
        )
    ]

    for old, new in replacements:
        content = re.sub(old, new, content, flags=re.IGNORECASE)

    # Replacements for trademark-by-city/[slug]/page.tsx
    replacements_city = [
        (
            r"Your brand name, logo, and slogan are the most visible assets of your business in <strong>\{location\}</strong>\. They distinguish you from competitors and carry the trust of your customers\. However, in India's competitive market, simply using a name does not guarantee ownership\. Without a registered trademark, your \{location\} business is operating on borrowed time\.",
            r"Your brand name and logo are vital assets in <strong>{location}</strong>. They distinguish you from competitors. However, just using a name does not guarantee ownership. Without a registered trademark, your {location} business is at risk."
        ),
        (
            r"<strong>Trademark Registration</strong> gives you the exclusive legal right to use your brand across \{location\} and the rest of India\. It empowers you to sue infringers for damages and stop them from using similar names\. It essentially turns your reputation into a tangible asset that can be licensed, franchised, or sold for profit\.",
            r"<strong>Trademark Registration</strong> grants you exclusive legal rights. You can sue infringers and stop them from using similar names. It turns your reputation into an asset you can license, franchise, or sell."
        ),
        (
            r"\"A trademark is the single most valuable asset a company in \{location\} can own\. It is the bridge between your local product and the customer's trust\.\"",
            r"\"A trademark is a highly valuable asset in {location}. It bridges your product with customer trust.\""
        ),
        (
            r"The Trade Marks Act, 1999, allows for the registration of various types of marks for your business in <strong>\{location\}</strong>, provided they are capable of being represented graphically\.",
            r"The Trade Marks Act allows registering various marks in <strong>{location}</strong>. They must be graphically representable."
        ),
        (
            r"Registering a trademark for your business in <strong>\{location\}</strong> is a legal procedure governed by the Trade Marks Act, 1999\. It is not an instant process but a journey that we navigate for you with precision\.",
            r"Registering a trademark in <strong>{location}</strong> is a legal procedure. It takes time, but we navigate the process for you with precision."
        ),
        (
            r"We use advanced algorithms to find phonetic and visual look-alikes across \{location\} and the rest of India\. This \"Clearance Search\" prevents objection risks later\. A thorough search reduces the probability of rejection by 80%\.",
            r"We perform searches to find similar marks across {location}. This \"Clearance Search\" prevents future objection risks. A thorough search reduces rejection probabilities significantly."
        ),
        (
            r"We identify the correct \"Class\" and draft the application for your \{location\} brand\. We carefully structure your \"User Affidavit\" to claim prior usage rights\. Once filed, you can start using the ™ symbol\.",
            r"We identify the correct Class and draft your application. We structure your User Affidavit for prior usage rights. Once filed, you can use the ™ symbol."
        ),
        (
            r"The Registrar examines the mark\. If objections are raised, our <strong>advocates in \{location\}</strong> draft a robust legal reply\. We cite relevant precedents to overcome Section 9 or 11 objections\.",
            r"The Registrar examines the mark. If objections arise, our <strong>advocates in {location}</strong> draft a robust reply. We cite precedents to overcome these objections."
        ),
        (
            r"Once accepted, the mark is published in the Trade Marks Journal\. This opens a 4-month window for third parties to oppose\. Our litigation team defends your rights aggressively in \{location\}\.",
            r"Once accepted, the mark is published. This opens a 4-month opposition window. Our team aggressively defends your rights in {location}."
        ),
        (
            r"The Registration Certificate is issued digitally\. You can now use the ® symbol\. This certificate acts as prima facie evidence of your ownership for your \{location\} business\.",
            r"The Registration Certificate is issued digitally. You can now use the ® symbol. It acts as solid evidence of ownership in {location}."
        ),
        (
            r"Opposition is a 4-month window where third parties can challenge your mark\. Our advocates for <strong>\{location\}</strong> have specialized experience in successfully defending trademarks during this phase\.",
            r"Opposition is a 4-month window for third parties to challenge your mark. Our {location} advocates have extensive experience defending trademarks."
        )
    ]

    for old, new in replacements_city:
        content = re.sub(old, new, content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
process_file('src/app/trademark-by-location/[slug]/page.tsx')
process_file('src/app/trademark-by-city/[slug]/page.tsx')
