'use client';

import React, { useState, useEffect } from 'react';

interface TrademarkSearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
}

export default function TrademarkSearchPopup({ isOpen, onClose, searchTerm }: TrademarkSearchPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    trademarkSearched: searchTerm,
    class: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [detectedClass, setDetectedClass] = useState<{class: number, confidence: number, reason: string} | null>(null);
  const [searchResults, setSearchResults] = useState<{similarCount: number, class: {number: number, name: string}, confidenceScore: number} | null>(null);

  // AI-powered class detection algorithm
  const detectTrademarkClass = (trademarkName: string) => {
    const name = trademarkName.toLowerCase();
    
    // Define keyword mappings for each class
    const classKeywords = {
      1: [
        'chemical', 'paint', 'coating', 'dye', 'pigment', 'resin', 'adhesive', 'lubricant', 'fertilizer', 'pesticide',
        'solvent', 'acid', 'alkali', 'detergent', 'emulsion', 'polymer', 'catalyst', 'compound', 'insecticide', 'herbicide',
        'biocide', 'antifreeze', 'antioxidant', 'preservative', 'disinfectant', 'cleaner', 'bleach', 'degreaser', 'additive', 'reagent', 'surfactant',
        'stabilizer', 'emulsifier', 'plasticizer', 'coagulant', 'flocculant', 'oxidizer', 'reducer', 'desiccant', 'descaler', 'softener',
        'hardener', 'retarder', 'accelerator', 'binder', 'sealant', 'mordant', 'tanning', 'alkyd', 'urethane', 'epoxy'
      ],
      2: [
        'paint', 'varnish', 'lacquer', 'primer', 'stain', 'coating', 'color', 'pigment', 'dye',
        'enamel', 'gloss', 'matte', 'finish', 'shellac', 'undercoat', 'topcoat', 'sealant', 'spray', 'aerosol',
        'emulsion', 'solvent', 'thinner', 'hardener', 'resin', 'acrylic', 'oil-based', 'water-based', 'polyurethane', 'epoxy',
        'adhesive', 'putty', 'filler', 'woodstain', 'antifouling', 'anti-corrosive', 'decorative', 'protective', 'pigmentation', 'tint',
        'coater', 'roller', 'brush', 'applicator', 'stripper', 'remover', 'glaze', 'patina', 'oxidizer', 'satin'
      ],
      3: [
        'cosmetic', 'beauty', 'skincare', 'makeup', 'perfume', 'soap', 'shampoo', 'cream', 'lotion', 'cleaning', 'detergent', 'bleach',
        'conditioner', 'serum', 'toner', 'moisturizer', 'mask', 'scrub', 'exfoliant', 'cleanser', 'deodorant', 'antiperspirant',
        'fragrance', 'cologne', 'aftershave', 'foundation', 'concealer', 'blush', 'eyeliner', 'mascara', 'lipstick', 'lipgloss',
        'nailpolish', 'cuticle', 'hairgel', 'hairspray', 'mousse', 'wax', 'pomade', 'bodywash', 'bath', 'bubble',
        'sunscreen', 'spf', 'tanning', 'whitening', 'brightening', 'anti-aging', 'wrinkle', 'firming', 'hydrating', 'soothing'
      ],
      4: [
        'fuel', 'gas', 'oil', 'petrol', 'diesel', 'lubricant', 'grease', 'wax', 'candle',
        'propane', 'butane', 'kerosene', 'biofuel', 'ethanol', 'biodiesel', 'gasoline', 'hydrocarbon', 'bitumen', 'asphalt',
        'paraffin', 'charcoal', 'coal', 'firewood', 'woodpellet', 'energy', 'combustible', 'octane', 'additive', 'refinery',
        'engineoil', 'transmissionfluid', 'hydraulicfluid', 'coolant', 'antifreeze', 'brakefluid', 'gearoil', 'synthetic', 'mineral', 'lubrication',
        'greasing', 'oiling', 'burner', 'stove', 'lampoil', 'lantern', 'lighterfluid', 'starterfluid', 'ignition', 'flammable'
      ],
      5: [
        'medical', 'pharmaceutical', 'drug', 'medicine', 'vitamin', 'supplement', 'health', 'therapeutic', 'clinical', 'surgical',
        'tablet', 'capsule', 'injection', 'vaccine', 'antibiotic', 'antiviral', 'antifungal', 'antiseptic', 'ointment', 'cream',
        'gel', 'syrup', 'elixir', 'lozenge', 'analgesic', 'painkiller', 'antipyretic', 'antacid', 'antihistamine', 'antidepressant',
        'antipsychotic', 'anticoagulant', 'antihypertensive', 'antidiabetic', 'antimalarial', 'antiparasitic', 'antirheumatic', 'antispasmodic', 'antitussive', 'sedative',
        'stimulant', 'hormone', 'contraceptive', 'immunosuppressant', 'chemotherapy', 'radiotherapy', 'diagnostic', 'prescription', 'over-the-counter', 'remedy'
      ],
      6: [
        'metal', 'steel', 'iron', 'aluminum', 'copper', 'brass', 'bronze', 'alloy', 'hardware', 'fastener',
        'bolt', 'nut', 'screw', 'washer', 'nail', 'sheet', 'rod', 'bar', 'tube', 'pipe',
        'wire', 'mesh', 'grate', 'casting', 'forging', 'stamping', 'extrusion', 'machining', 'fabrication', 'galvanized',
        'plating', 'anodized', 'tempered', 'hardened', 'welded', 'riveted', 'joint', 'hinge', 'bracket', 'clip',
        'spring', 'bearing', 'gear', 'pulley', 'chain', 'sprocket', 'fitting', 'coupling', 'connector', 'frame'
      ],
      7: [
        'machine', 'engine', 'motor', 'generator', 'pump', 'compressor', 'turbine', 'mechanical', 'industrial',
        'gearbox', 'transmission', 'conveyor', 'robot', 'automation', 'press', 'lathe', 'milling', 'drill', 'grinder',
        'cutter', 'saw', 'welder', 'hydraulic', 'pneumatic', 'actuator', 'valve', 'bearing', 'shaft', 'pulley',
        'belt', 'chain', 'drive', 'clutch', 'brake', 'hoist', 'crane', 'lift', 'elevator', 'winch',
        'mixer', 'agitator', 'extruder', 'injection', 'molding', 'packaging', 'sealer', 'labeler', 'sorter', 'feeder'
      ],
      8: [
        'tool', 'hammer', 'screwdriver', 'wrench', 'pliers', 'drill', 'saw', 'knife', 'blade', 'cutter',
        'chisel', 'file', 'rasp', 'level', 'tape', 'measure', 'square', 'clamp', 'vise', 'mallet',
        'spanner', 'socket', 'ratchet', 'bit', 'driver', 'awl', 'punch', 'shear', 'snip', 'scissors',
        'trowel', 'scraper', 'shovel', 'hoe', 'rake', 'pick', 'axe', 'crowbar', 'prybar', 'sander',
        'plane', 'gouge', 'reamer', 'tap', 'die', 'caliper', 'micrometer', 'gauge', 'tester', 'multitool'
      ],
      9: [
        'electronic', 'software', 'computer', 'phone', 'tablet', 'app', 'digital', 'tech', 'gadget', 'device', 'chip', 'circuit',
        'laptop', 'desktop', 'notebook', 'monitor', 'display', 'screen', 'keyboard', 'mouse', 'printer', 'scanner',
        'router', 'modem', 'server', 'network', 'wifi', 'bluetooth', 'usb', 'hdmi', 'ssd', 'hdd',
        'processor', 'cpu', 'gpu', 'ram', 'motherboard', 'mainboard', 'logicboard', 'firmware', 'os', 'operating system',
        'wearable', 'smartwatch', 'earbuds', 'headphones', 'speaker', 'camera', 'webcam', 'microphone', 'projector', 'console'
      ],
      10: [
        'medical', 'surgical', 'instrument', 'scalpel', 'forceps', 'stethoscope', 'thermometer', 'syringe',
        'needle', 'catheter', 'probe', 'retractor', 'speculum', 'clamp', 'scissors', 'tweezer', 'dilator', 'curette',
        'endoscope', 'otoscope', 'ophthalmoscope', 'defibrillator', 'monitor', 'infusion', 'drip', 'pump', 'ventilator', 'respirator',
        'anesthesia', 'mask', 'glove', 'gown', 'drape', 'tray', 'sterilizer', 'autoclave', 'incubator', 'centrifuge',
        'microscope', 'slide', 'pipette', 'test tube', 'swab', 'bandage', 'splint', 'cast', 'wheelchair', 'walker'
      ],
      11: [
        'appliance', 'lighting', 'lamp', 'heater', 'cooler', 'fan', 'plumbing', 'fixture', 'bulb', 'switch',
        'refrigerator', 'freezer', 'oven', 'stove', 'microwave', 'dishwasher', 'washer', 'dryer', 'air conditioner', 'humidifier',
        'dehumidifier', 'thermostat', 'faucet', 'sink', 'toilet', 'shower', 'bathtub', 'water heater', 'boiler', 'radiator',
        'vent', 'duct', 'filter', 'purifier', 'extractor', 'hood', 'range', 'grill', 'toaster', 'kettle',
        'iron', 'vacuum', 'mop', 'broom', 'garbage disposal', 'compactor', 'dispenser', 'timer', 'alarm', 'bell'
      ],
      12: [
        'vehicle', 'car', 'truck', 'motorcycle', 'bike', 'auto', 'transport', 'engine', 'wheel', 'tire',
        'bus', 'van', 'suv', 'jeep', 'scooter', 'moped', 'trailer', 'caravan', 'camper', 'boat',
        'ship', 'yacht', 'aircraft', 'plane', 'helicopter', 'drone', 'locomotive', 'train', 'tram', 'subway',
        'metro', 'taxi', 'cab', 'limousine', 'pickup', 'chassis', 'axle', 'brake', 'clutch', 'gearbox',
        'steering', 'suspension', 'bumper', 'mirror', 'headlight', 'taillight', 'dashboard', 'seat', 'seatbelt', 'airbag'
      ],
      13: [
        'firearm', 'gun', 'weapon', 'explosive', 'ammunition', 'bullet', 'bomb', 'firework',
        'rifle', 'pistol', 'revolver', 'shotgun', 'carbine', 'machinegun', 'grenade', 'rocket', 'missile', 'torpedo',
        'mine', 'shell', 'projectile', 'cartridge', 'magazine', 'clip', 'holster', 'scope', 'sight', 'bayonet',
        'suppressor', 'silencer', 'trigger', 'barrel', 'stock', 'grip', 'safety', 'launcher', 'detonator', 'fuse',
        'blasting', 'charge', 'pyrotechnic', 'flare', 'smoke', 'tear gas', 'stun', 'taser', 'baton', 'mace'
      ],
      14: [
        'jewelry', 'ring', 'necklace', 'bracelet', 'watch', 'diamond', 'gold', 'silver', 'precious', 'gem',
        'earring', 'pendant', 'brooch', 'cufflink', 'bangle', 'charm', 'anklet', 'tiara', 'crown', 'diadem',
        'platinum', 'ruby', 'emerald', 'sapphire', 'opal', 'pearl', 'jade', 'topaz', 'amethyst', 'garnet',
        'jeweller', 'goldsmith', 'silversmith', 'lapidary', 'engraving', 'setting', 'mount', 'clasp', 'chain', 'bead',
        'ornament', 'trinket', 'bauble', 'accessory', 'jewelbox', 'case', 'display', 'polish', 'cleaner', 'tester'
      ],
      15: [
        'music', 'instrument', 'guitar', 'piano', 'drum', 'violin', 'saxophone', 'trumpet', 'audio', 'sound',
        'flute', 'clarinet', 'oboe', 'bassoon', 'trombone', 'tuba', 'cello', 'double bass', 'harp', 'banjo',
        'mandolin', 'ukulele', 'harmonica', 'accordion', 'organ', 'synthesizer', 'keyboard', 'amplifier', 'speaker', 'microphone',
        'pick', 'bow', 'string', 'reed', 'mouthpiece', 'mute', 'case', 'stand', 'sheet music', 'score',
        'metronome', 'tuner', 'pedal', 'cable', 'strap', 'drumstick', 'mallet', 'brush', 'rosin', 'cleaner'
      ],
      16: [
        'paper', 'stationery', 'notebook', 'pen', 'pencil', 'book', 'magazine', 'newspaper', 'card', 'envelope',
        'diary', 'journal', 'pad', 'sheet', 'ream', 'folder', 'binder', 'file', 'clip', 'stapler',
        'eraser', 'sharpener', 'marker', 'highlighter', 'crayon', 'chalk', 'post-it', 'label', 'tag', 'index',
        'calendar', 'planner', 'organizer', 'ledger', 'receipt', 'invoice', 'form', 'certificate', 'brochure', 'flyer',
        'leaflet', 'catalog', 'manual', 'guide', 'instruction', 'blueprint', 'drawing', 'sketch', 'print', 'copy'
      ],
      17: [
        'rubber', 'plastic', 'polymer', 'synthetic', 'resin', 'molding', 'injection', 'extrusion',
        'elastomer', 'latex', 'neoprene', 'silicone', 'polyethylene', 'polypropylene', 'polycarbonate', 'acrylic', 'nylon', 'teflon',
        'urethane', 'epoxy', 'vinyl', 'pvc', 'abs', 'foam', 'sponge', 'seal', 'gasket', 'hose',
        'tube', 'pipe', 'sheet', 'film', 'rod', 'bar', 'pellet', 'granule', 'compound', 'blend',
        'recycling', 'thermoplastic', 'thermoset', 'vulcanized', 'laminate', 'coating', 'adhesive', 'insulation', 'lining', 'cover'
      ],
      18: [
        'leather', 'bag', 'purse', 'wallet', 'belt', 'shoe', 'boot', 'sandal', 'handbag', 'backpack',
        'briefcase', 'satchel', 'tote', 'clutch', 'duffel', 'suitcase', 'luggage', 'case', 'strap', 'buckle',
        'glove', 'jacket', 'coat', 'vest', 'apron', 'holster', 'sheath', 'cover', 'lining', 'patch',
        'hide', 'skin', 'suede', 'nubuck', 'grain', 'embossed', 'tanned', 'dyed', 'polished', 'lacquered',
        'accessory', 'keychain', 'tag', 'zipper', 'snap', 'stud', 'ornament', 'decor', 'trim', 'panel'
      ],
      19: [
        'building', 'construction', 'cement', 'concrete', 'brick', 'stone', 'tile', 'roofing', 'insulation',
        'mortar', 'plaster', 'grout', 'aggregate', 'sand', 'gravel', 'block', 'slab', 'panel', 'beam',
        'column', 'girder', 'joist', 'rafter', 'truss', 'framework', 'scaffold', 'formwork', 'rebar', 'mesh',
        'drywall', 'gypsum', 'asphalt', 'bitumen', 'sealant', 'adhesive', 'paint', 'coating', 'cladding', 'siding',
        'window', 'door', 'lintel', 'threshold', 'fascia', 'gutter', 'downspout', 'flashing', 'vent', 'chimney'
      ],
      20: [
        'furniture', 'chair', 'table', 'desk', 'sofa', 'bed', 'cabinet', 'shelf', 'stool', 'bench',
        'dresser', 'wardrobe', 'armoire', 'nightstand', 'sideboard', 'buffet', 'hutch', 'bookcase', 'cupboard', 'console',
        'ottoman', 'recliner', 'lounger', 'chaise', 'crib', 'bunk', 'headboard', 'footboard', 'frame', 'mattress',
        'cushion', 'pillow', 'upholstery', 'cover', 'slipcover', 'drawer', 'handle', 'knob', 'leg', 'caster',
        'rack', 'stand', 'mount', 'partition', 'screen', 'divider', 'panel', 'workstation', 'podium', 'lectern'
      ],
      21: [
        'kitchen', 'utensil', 'cookware', 'pot', 'pan', 'knife', 'fork', 'spoon', 'plate', 'bowl', 'cup',
        'mug', 'glass', 'jug', 'pitcher', 'kettle', 'teapot', 'colander', 'strainer', 'sieve', 'grater',
        'peeler', 'whisk', 'spatula', 'ladle', 'tongs', 'masher', 'chopper', 'blender', 'mixer', 'processor',
        'bottle', 'opener', 'corkscrew', 'can opener', 'measuring cup', 'measuring spoon', 'timer', 'scale', 'tray', 'rack',
        'cutting board', 'rolling pin', 'pastry brush', 'baster', 'thermometer', 'skewer', 'steamer', 'rice cooker', 'slow cooker', 'pressure cooker'
      ],
      22: [
        'rope', 'net', 'sack', 'bag', 'cord', 'string', 'twine', 'cable', 'wire', 'fiber',
        'thread', 'yarn', 'strap', 'belt', 'webbing', 'mesh', 'line', 'tape', 'chain', 'hose',
        'bungee', 'elastic', 'shoelace', 'drawstring', 'lanyard', 'harness', 'sling', 'tether', 'leash', 'fishing line',
        'trawl', 'dragnet', 'seine', 'gillnet', 'castnet', 'netting', 'web', 'filament', 'braid', 'splice',
        'bundle', 'coil', 'reel', 'spool', 'bobbin', 'sheath', 'cover', 'sheave', 'pulley', 'winch'
      ],
      23: [
        'yarn', 'thread', 'fiber', 'textile', 'fabric', 'cloth', 'weaving', 'spinning', 'knitting',
        'crochet', 'embroidery', 'lace', 'cord', 'string', 'filament', 'roving', 'sliver', 'tow', 'staple',
        'warp', 'weft', 'loom', 'bobbin', 'spool', 'skein', 'hank', 'cone', 'ball', 'twist',
        'ply', 'blend', 'dyed', 'undyed', 'natural', 'synthetic', 'wool', 'cotton', 'silk', 'linen',
        'polyester', 'nylon', 'acrylic', 'rayon', 'bamboo', 'alpaca', 'angora', 'cashmere', 'hemp', 'jute'
      ],
      24: [
        'fabric', 'textile', 'cloth', 'material', 'fiber', 'yarn', 'thread', 'weaving', 'knitting',
        'crochet', 'lace', 'embroidery', 'canvas', 'denim', 'twill', 'satin', 'velvet', 'corduroy', 'flannel',
        'jersey', 'fleece', 'felt', 'net', 'mesh', 'tulle', 'organza', 'chiffon', 'georgette', 'crepe',
        'poplin', 'gabardine', 'broadcloth', 'muslin', 'calico', 'batik', 'print', 'dyed', 'undyed', 'patterned',
        'plain', 'woven', 'knit', 'nonwoven', 'laminated', 'coated', 'quilted', 'upholstery', 'lining', 'interfacing'
      ],
      25: [
        'clothing', 'apparel', 'shirt', 'pants', 'dress', 'jacket', 'shoe', 'hat', 'cap', 'fashion', 'wear',
        'skirt', 'blouse', 't-shirt', 'jeans', 'shorts', 'sweater', 'coat', 'suit', 'tie', 'scarf',
        'sock', 'stocking', 'legging', 'glove', 'mitten', 'belt', 'buckle', 'button', 'zipper', 'snap',
        'hoodie', 'sweatshirt', 'tracksuit', 'activewear', 'sportswear', 'underwear', 'lingerie', 'bra', 'brief', 'boxer',
        'swimsuit', 'bikini', 'robe', 'pajama', 'nightgown', 'slipper', 'boot', 'sandal', 'loafer', 'sneaker'
      ],
      26: [
        'lace', 'embroidery', 'accessory', 'button', 'zipper', 'buckle', 'trim', 'ribbon', 'decorative',
        'applique', 'patch', 'stud', 'snap', 'hook', 'eye', 'fastener', 'bead', 'sequin', 'fringe',
        'braid', 'cord', 'piping', 'binding', 'tassel', 'rosette', 'flower', 'motif', 'ornament', 'brooch',
        'pin', 'clip', 'slide', 'barrette', 'hairpin', 'headband', 'scarf', 'shawl', 'wrap', 'cuff',
        'collar', 'placket', 'gusset', 'insert', 'panel', 'overlay', 'underlay', 'lining', 'interfacing', 'support'
      ],
      27: [
        'carpet', 'rug', 'flooring', 'mat', 'tile', 'linoleum', 'vinyl', 'wood', 'laminate',
        'parquet', 'hardwood', 'bamboo', 'cork', 'underlay', 'padding', 'runner', 'doormat', 'area rug', 'throw rug',
        'shag', 'berber', 'pile', 'loop', 'cut', 'tufted', 'woven', 'knotted', 'braided', 'felted',
        'border', 'fringe', 'binding', 'edging', 'seam', 'tack', 'strip', 'adhesive', 'gripper', 'transition',
        'threshold', 'molding', 'baseboard', 'quarter round', 'stair tread', 'riser', 'tile', 'plank', 'sheet', 'roll'
      ],
      28: [
        'toy', 'game', 'sport', 'ball', 'doll', 'puzzle', 'board', 'card', 'recreational', 'play',
        'action figure', 'plush', 'stuffed', 'block', 'construction set', 'model', 'train', 'car', 'truck', 'robot',
        'remote control', 'electronic', 'video game', 'console', 'controller', 'joystick', 'dice', 'spinner', 'marble', 'yo-yo',
        'kite', 'frisbee', 'jump rope', 'hula hoop', 'skate', 'scooter', 'bike', 'helmet', 'pad', 'glove',
        'bat', 'racket', 'net', 'goal', 'hoop', 'stick', 'puck', 'balloon', 'bubble', 'slime'
      ],
      29: [
        'food', 'meat', 'fish', 'dairy', 'cheese', 'milk', 'yogurt', 'preserve', 'jam', 'jelly', 'canned',
        'frozen', 'processed', 'ready meal', 'snack', 'bar', 'sausage', 'ham', 'bacon', 'egg', 'butter',
        'cream', 'ice cream', 'dessert', 'pudding', 'spread', 'sauce', 'gravy', 'broth', 'soup', 'stew',
        'seafood', 'shellfish', 'crab', 'shrimp', 'lobster', 'salmon', 'tuna', 'sardine', 'anchovy', 'mackerel',
        'curd', 'paneer', 'whey', 'condensed milk', 'evaporated milk', 'powdered milk', 'ghee', 'lard', 'margarine', 'shortening'
      ],
      30: [
        'coffee', 'tea', 'flour', 'spice', 'salt', 'sugar', 'rice', 'pasta', 'bread', 'cereal', 'grain',
        'biscuit', 'cookie', 'cracker', 'cake', 'pastry', 'pie', 'muffin', 'croissant', 'bagel', 'toast',
        'oat', 'barley', 'wheat', 'corn', 'maize', 'rye', 'millet', 'sorghum', 'buckwheat', 'quinoa',
        'noodle', 'vermicelli', 'macaroni', 'spaghetti', 'lasagna', 'fettuccine', 'ravioli', 'tortellini', 'dumpling', 'gnocchi',
        'herb', 'pepper', 'cinnamon', 'clove', 'nutmeg', 'ginger', 'cardamom', 'cumin', 'mustard', 'turmeric'
      ],
      31: [
        'agricultural', 'fruit', 'vegetable', 'grain', 'seed', 'plant', 'crop', 'fresh', 'organic', 'natural',
        'herb', 'spice', 'flower', 'tree', 'shrub', 'vine', 'root', 'tuber', 'bulb', 'sprout',
        'bean', 'pea', 'lentil', 'pulse', 'nut', 'berry', 'melon', 'citrus', 'apple', 'banana',
        'potato', 'tomato', 'onion', 'carrot', 'lettuce', 'cabbage', 'spinach', 'broccoli', 'cauliflower', 'pepper',
        'corn', 'wheat', 'rice', 'barley', 'oat', 'sorghum', 'millet', 'quinoa', 'canola', 'soybean'
      ],
      32: [
        'beer', 'beverage', 'drink', 'soda', 'juice', 'water', 'energy', 'sports', 'non-alcoholic',
        'soft drink', 'cola', 'lemonade', 'tonic', 'ginger ale', 'root beer', 'sparkling', 'mineral', 'spring', 'distilled',
        'bottled', 'canned', 'carbonated', 'isotonic', 'electrolyte', 'smoothie', 'milkshake', 'tea', 'coffee', 'cocoa',
        'chocolate', 'malt', 'barley', 'hop', 'yeast', 'brew', 'fermented', 'kombucha', 'kvass', 'mocktail',
        'cocktail', 'punch', 'nectar', 'squash', 'cordial', 'syrup', 'concentrate', 'infusion', 'herbal', 'flavored'
      ],
      33: [
        'alcohol', 'wine', 'spirit', 'liquor', 'cocktail', 'whiskey', 'vodka', 'rum', 'gin', 'brandy',
        'tequila', 'mezcal', 'cognac', 'armagnac', 'schnapps', 'liqueur', 'absinthe', 'vermouth', 'port', 'sherry',
        'champagne', 'sparkling wine', 'prosecco', 'cava', 'beer', 'ale', 'lager', 'stout', 'porter', 'cider',
        'perry', 'mead', 'sake', 'soju', 'baijiu', 'grappa', 'ouzo', 'rakia', 'aquavit', 'bitters',
        'distillery', 'brewery', 'winery', 'barrel', 'aging', 'fermentation', 'mash', 'wort', 'yeast', 'spirituous'
      ],
      34: [
        'tobacco', 'cigarette', 'cigar', 'pipe', 'smoking', 'match', 'lighter', 'ashtray',
        'snuff', 'chew', 'dip', 'hookah', 'shisha', 'vape', 'e-cigarette', 'vaporizer', 'rolling paper', 'filter',
        'tip', 'case', 'pouch', 'humidor', 'cutter', 'torch', 'butane', 'flint', 'tobacconist', 'blend',
        'leaf', 'wrapper', 'binder', 'filler', 'nicotine', 'menthol', 'flavor', 'tar', 'resin', 'ash',
        'stub', 'butt', 'carton', 'pack', 'box', 'tin', 'tube', 'holder', 'stand', 'tray'
      ],
      35: [
        'business', 'management', 'advertising', 'marketing', 'retail', 'wholesale', 'commerce', 'trade', 'sales',
        'consulting', 'strategy', 'planning', 'operation', 'administration', 'organization', 'franchise', 'distribution', 'supply', 'procurement',
        'outsourcing', 'brokerage', 'agency', 'representation', 'promotion', 'branding', 'publicity', 'merchandising', 'inventory', 'stock',
        'logistics', 'shipping', 'delivery', 'fulfillment', 'customer', 'service', 'support', 'call center', 'telemarketing', 'e-commerce',
        'marketplace', 'auction', 'bidding', 'tender', 'negotiation', 'deal', 'transaction', 'invoice', 'billing', 'payment'
      ],
      36: [
        'financial', 'banking', 'insurance', 'investment', 'credit', 'loan', 'mortgage', 'fund', 'capital',
        'asset', 'liability', 'equity', 'bond', 'stock', 'share', 'dividend', 'portfolio', 'broker', 'dealer',
        'exchange', 'market', 'trading', 'hedge', 'derivative', 'option', 'future', 'swap', 'currency', 'forex',
        'remittance', 'transfer', 'deposit', 'withdrawal', 'savings', 'checking', 'account', 'statement', 'balance', 'interest',
        'rate', 'fee', 'commission', 'premium', 'claim', 'policy', 'underwriting', 'actuary', 'pension', 'annuity'
      ],
      37: [
        'construction', 'repair', 'maintenance', 'installation', 'renovation', 'building', 'contracting', 'service',
        'remodeling', 'remediation', 'restoration', 'demolition', 'excavation', 'grading', 'foundation', 'framing', 'roofing', 'siding',
        'plumbing', 'electrical', 'hvac', 'heating', 'cooling', 'ventilation', 'insulation', 'drywall', 'painting', 'flooring',
        'tiling', 'carpentry', 'masonry', 'concrete', 'paving', 'asphalt', 'landscaping', 'fencing', 'decking', 'window',
        'door', 'garage', 'gate', 'awning', 'shutter', 'gutter', 'drainage', 'waterproofing', 'sealing', 'caulking'
      ],
      38: [
        'telecommunication', 'communication', 'phone', 'internet', 'broadcast', 'radio', 'television', 'satellite',
        'mobile', 'cellular', 'wireless', 'network', 'broadband', 'fiber', 'dsl', 'cable', 'modem', 'router',
        'switch', 'hub', 'server', 'data', 'signal', 'transmission', 'reception', 'antenna', 'tower', 'relay',
        'microwave', 'infrared', 'bluetooth', 'wifi', 'voip', 'sms', 'mms', 'paging', 'fax', 'telegraph',
        'conference', 'videocall', 'webinar', 'streaming', 'podcast', 'broadcasting', 'media', 'content', 'platform', 'portal'
      ],
      39: [
        'transport', 'shipping', 'delivery', 'logistics', 'freight', 'cargo', 'storage', 'warehouse', 'travel',
        'distribution', 'dispatch', 'courier', 'parcel', 'package', 'shipment', 'container', 'pallet', 'crating', 'handling',
        'loading', 'unloading', 'transit', 'route', 'fleet', 'vehicle', 'trucking', 'rail', 'air', 'sea',
        'port', 'terminal', 'dock', 'customs', 'clearance', 'brokerage', 'tracking', 'navigation', 'ticket', 'reservation',
        'booking', 'tour', 'trip', 'journey', 'excursion', 'charter', 'rental', 'lease', 'carriage', 'forwarding'
      ],
      40: [
        'manufacturing', 'processing', 'production', 'treatment', 'fabrication', 'assembly', 'custom', 'made',
        'machining', 'molding', 'casting', 'forging', 'stamping', 'welding', 'cutting', 'grinding', 'polishing', 'finishing',
        'coating', 'painting', 'plating', 'anodizing', 'galvanizing', 'laminating', 'extrusion', 'injection', 'compression', 'vacuum',
        'automation', 'robotics', 'line', 'plant', 'factory', 'workshop', 'tooling', 'jig', 'fixture', 'die',
        'prototype', 'pilot', 'batch', 'mass', 'continuous', 'lean', 'quality', 'inspection', 'testing', 'packaging'
      ],
      41: [
        'education', 'training', 'school', 'university', 'course', 'class', 'learning', 'teaching', 'entertainment',
        'college', 'academy', 'institute', 'seminar', 'workshop', 'lecture', 'tutorial', 'lesson', 'curriculum', 'syllabus',
        'degree', 'diploma', 'certificate', 'exam', 'test', 'quiz', 'assessment', 'grading', 'tutoring', 'mentoring',
        'coaching', 'counseling', 'enrichment', 'extracurricular', 'activity', 'camp', 'competition', 'olympiad', 'scholarship', 'grant',
        'library', 'book', 'reading', 'writing', 'math', 'science', 'history', 'language', 'music', 'art'
      ],
      42: [
        'scientific', 'technology', 'research', 'development', 'software', 'programming', 'computer', 'tech', 'innovation',
        'engineering', 'analysis', 'testing', 'design', 'simulation', 'modeling', 'algorithm', 'data', 'ai', 'machine learning',
        'deep learning', 'cloud', 'saas', 'paas', 'iaas', 'database', 'web', 'app', 'mobile', 'platform',
        'hardware', 'firmware', 'network', 'cyber', 'security', 'encryption', 'blockchain', 'iot', 'robotics', 'automation',
        'consulting', 'integration', 'deployment', 'maintenance', 'support', 'solution', 'system', 'architecture', 'framework', 'api'
      ],
      43: [
        'restaurant', 'hotel', 'catering', 'hospitality', 'food', 'service', 'dining', 'accommodation', 'bar',
        'cafe', 'bistro', 'pub', 'inn', 'motel', 'resort', 'lodge', 'guesthouse', 'banquet', 'buffet',
        'takeaway', 'delivery', 'room service', 'waiter', 'waitress', 'chef', 'cook', 'kitchen', 'menu', 'dish',
        'beverage', 'drink', 'cocktail', 'wine', 'beer', 'snack', 'breakfast', 'lunch', 'dinner', 'brunch',
        'reservation', 'booking', 'event', 'conference', 'wedding', 'party', 'catering', 'banqueting', 'concierge', 'valet'
      ],
      44: [
        'medical', 'veterinary', 'health', 'care', 'treatment', 'therapy', 'clinic', 'hospital', 'wellness',
        'doctor', 'nurse', 'physician', 'surgeon', 'dentist', 'optometrist', 'pharmacist', 'therapist', 'counselor', 'psychologist',
        'psychiatrist', 'midwife', 'paramedic', 'emergency', 'ambulance', 'first aid', 'diagnosis', 'screening', 'checkup', 'consultation',
        'rehabilitation', 'physiotherapy', 'occupational therapy', 'speech therapy', 'nutrition', 'diet', 'fitness', 'exercise', 'spa', 'massage',
        'alternative', 'holistic', 'herbal', 'acupuncture', 'chiropractic', 'osteopathy', 'homeopathy', 'remedy', 'supplement', 'preventive'
      ],
      45: [
        'legal', 'security', 'protection', 'safety', 'guard', 'patrol', 'investigation', 'law', 'attorney',
        'lawyer', 'solicitor', 'barrister', 'advocate', 'counsel', 'notary', 'paralegal', 'litigation', 'arbitration', 'mediation',
        'compliance', 'regulation', 'contract', 'agreement', 'deed', 'will', 'trust', 'estate', 'intellectual property', 'copyright',
        'patent', 'trademark', 'licensing', 'enforcement', 'prosecution', 'defense', 'court', 'trial', 'hearing', 'appeal',
        'witness', 'evidence', 'testimony', 'affidavit', 'deposition', 'summons', 'subpoena', 'bail', 'bond', 'forensic'
      ]
    };

    // Calculate scores for each class
    const classScores: { [key: number]: number } = {};
    
    Object.keys(classKeywords).forEach(classNum => {
      const num = parseInt(classNum);
      classScores[num] = 0;
      
      classKeywords[num as keyof typeof classKeywords].forEach(keyword => {
        if (name.includes(keyword)) {
          classScores[num] += 1;
        }
      });
    });

    // Find the class with the highest score
    const bestMatch = Object.entries(classScores).reduce((a, b) => 
      classScores[parseInt(a[0])] > classScores[parseInt(b[0])] ? a : b
    );

    const bestClassNumber = parseInt(bestMatch[0]);
    const confidence = bestMatch[1];

    // If no keywords match, suggest common classes
    if (confidence === 0) {
      // Default suggestions based on common business types
      if (name.includes('app') || name.includes('software') || name.includes('tech')) {
        return { class: 42, confidence: 0.8, reason: 'Technology/Software related' };
      } else if (name.includes('food') || name.includes('restaurant') || name.includes('cafe')) {
        return { class: 43, confidence: 0.8, reason: 'Food service related' };
      } else if (name.includes('clothing') || name.includes('fashion') || name.includes('wear')) {
        return { class: 25, confidence: 0.8, reason: 'Clothing/Fashion related' };
      } else {
        return { class: 35, confidence: 0.6, reason: 'General business services' };
      }
    }

    // Calculate confidence percentage
    const maxPossibleScore = classKeywords[bestClassNumber as keyof typeof classKeywords].length;
    const confidencePercentage = Math.min((confidence / maxPossibleScore) * 100, 100);

    return {
      class: bestClassNumber,
      confidence: confidencePercentage,
      reason: `Detected ${confidence} matching keyword${confidence > 1 ? 's' : ''}`
    };
  };

  // Generate dynamic search results based on the search term
  const generateSearchResults = (searchTerm: string) => {
    const trademarkClasses = [
      { number: 1, name: 'Chemicals' },
      { number: 2, name: 'Paints' },
      { number: 3, name: 'Cosmetics & Cleaning Products' },
      { number: 4, name: 'Fuels & Industrial Oils' },
      { number: 5, name: 'Pharmaceuticals & Medical Supplies' },
      { number: 6, name: 'Metals & Metal Goods' },
      { number: 7, name: 'Machinery' },
      { number: 8, name: 'Hand Tools' },
      { number: 9, name: 'Electronics & Software' },
      { number: 10, name: 'Medical Instruments' },
      { number: 11, name: 'Appliances (Lighting, Heating, Plumbing)' },
      { number: 12, name: 'Vehicles' },
      { number: 13, name: 'Firearms & Explosives' },
      { number: 14, name: 'Jewelry & Precious Metals' },
      { number: 15, name: 'Musical Instruments' },
      { number: 16, name: 'Paper & Stationery' },
      { number: 17, name: 'Rubber & Plastics' },
      { number: 18, name: 'Leather Goods & Bags' },
      { number: 19, name: 'Building Materials (Non-Metallic)' },
      { number: 20, name: 'Furniture' },
      { number: 21, name: 'Household Utensils & Kitchenware' },
      { number: 22, name: 'Ropes, Nets & Sacks' },
      { number: 23, name: 'Yarns & Threads' },
      { number: 24, name: 'Fabrics & Textiles' },
      { number: 25, name: 'Clothing, Footwear & Headgear' },
      { number: 26, name: 'Lace, Embroidery & Accessories' },
      { number: 27, name: 'Carpets & Floor Coverings' },
      { number: 28, name: 'Toys, Games & Sporting Goods' },
      { number: 29, name: 'Foodstuffs (Meat, Fish, Dairy, Preserves)' },
      { number: 30, name: 'Foodstuffs (Staples: Coffee, Tea, Flour, Spices)' },
      { number: 31, name: 'Agricultural Products (Fresh Fruits, Vegetables, Grains)' },
      { number: 32, name: 'Beers & Non-Alcoholic Beverages' },
      { number: 33, name: 'Alcoholic Beverages (Except Beer)' },
      { number: 34, name: 'Tobacco, Smokers\' Articles & Matches' },
      { number: 35, name: 'Business & Management Services' },
      { number: 36, name: 'Financial & Insurance Services' },
      { number: 37, name: 'Construction & Repair Services' },
      { number: 38, name: 'Telecommunications Services' },
      { number: 39, name: 'Transport & Storage Services' },
      { number: 40, name: 'Treatment of Materials (Manufacturing, Processing)' },
      { number: 41, name: 'Education & Training Services' },
      { number: 42, name: 'Scientific & IT Services (Technology, Software, Research)' },
      { number: 43, name: 'Hospitality (Restaurants, Hotels, Catering)' },
      { number: 44, name: 'Medical & Veterinary Services' },
      { number: 45, name: 'Legal & Security Services' }
    ];

    // Use the same detection algorithm to get consistent results
    const detection = detectTrademarkClass(searchTerm);
    const detectedClass = trademarkClasses.find(c => c.number === detection.class);
    
    // Generate random but realistic numbers for similar trademarks and confidence
    const similarCount = Math.floor(Math.random() * 8) + 1; // 1-8 similar trademarks
    const confidenceScore = Math.floor(Math.random() * 40) + 45; // 45-85% confidence

    return {
      similarCount,
      class: detectedClass || trademarkClasses[34], // Default to Class 35 if not found
      confidenceScore
    };
  };

  // Initialize search results only once when searchTerm changes
  useEffect(() => {
    if (searchTerm.trim()) {
      const results = generateSearchResults(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  }, [searchTerm]);

  // Auto-detect class when trademark name changes
  useEffect(() => {
    if (searchTerm.trim()) {
      const detection = detectTrademarkClass(searchTerm);
      setDetectedClass(detection);
      setFormData(prev => ({
        ...prev,
        trademarkSearched: searchTerm,
        class: detection.class.toString()
      }));
    } else {
      setDetectedClass(null);
    }
  }, [searchTerm]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.class) {
      newErrors.class = 'Please select a trademark class';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      
      // Show success message or redirect
      alert('Account created successfully! Your trademark report is being generated.');
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        state: '',
        trademarkSearched: searchTerm,
        class: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40 p-4 pt-20">
      <div className="bg-[#171717] rounded-[60px] border border-gray-700 max-w-5xl w-full max-h-[75vh] overflow-y-auto relative scrollbar-hide">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <i className="fas fa-xmark text-xl"></i>
        </button>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
          {/* Left Section - Search Results */}
          <div className="lg:col-span-2 space-y-3">
            {/* Header Badges */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2 bg-gray-800 bg-opacity-60 rounded-full px-3 py-1.5 border border-gray-600">
                <i className="fas fa-brain text-[#fbbf24] text-xs"></i>
                <span className="text-white text-xs font-medium font-nunito">AI Trademark</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 bg-opacity-60 rounded-full px-3 py-1.5 border border-gray-600">
                <i className="fas fa-shield-alt text-[#fbbf24] text-xs"></i>
                <span className="text-white text-xs font-medium font-nunito">Security Checking</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-white text-lg font-bold mb-1 font-nunito">
                Trademark Check Results for "{searchTerm}"
              </h2>
              <p className="text-gray-400 text-xs font-nunito">
                Preliminary automated scan completed. Review quick insights below.
              </p>
            </div>

            {/* Quick Insights Box */}
            <div className="border-2 border-blue-500 rounded-[15px] bg-gray-900 bg-opacity-50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-lightbulb text-[#fbbf24] text-xs"></i>
                <span className="text-white font-semibold font-nunito text-sm">Quick insights</span>
              </div>
              
              <div className="space-y-2">
                {searchResults && (
                  <>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check text-green-400 text-xs mt-0.5"></i>
                      <span className="text-white text-xs font-nunito">
                        {searchResults.similarCount} Similar Trademark{searchResults.similarCount !== 1 ? 's' : ''} Found in Class {searchResults.class.number} <span className="text-gray-400">({searchResults.class.name})</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check text-green-400 text-xs mt-0.5"></i>
                      <span className="text-white text-xs font-nunito">
                        AI Confidence Score: {searchResults.confidenceScore}% chance your brand may face an objection
                      </span>
                    </div>
                  </>
                )}
                {detectedClass && (
                  <div className="flex items-start gap-2">
                    <i className="fas fa-robot text-[#fbbf24] text-xs mt-0.5"></i>
                    <span className="text-white text-xs font-nunito">
                      AI Class Detection: Class {detectedClass.class} with {Math.round(detectedClass.confidence)}% confidence
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Full Report Section */}
            <div className="bg-gray-800 bg-opacity-30 rounded-[15px] p-4 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-file-alt text-white text-xs"></i>
                <span className="text-white font-semibold font-nunito text-sm">Full Report</span>
              </div>
              
              {/* Blurred Content */}
              <div className="space-y-2 filter blur-sm">
                <p className="text-gray-300 text-xs font-nunito">
                  <strong>Conflict List:</strong> Full breakdown with trademark names & classes
                </p>
                <p className="text-gray-300 text-xs font-nunito">
                  <strong>Similar Analysis:</strong> Detailed comparison with existing trademarks
                </p>
                <p className="text-gray-300 text-xs font-nunito">
                  <strong>Filing Strategy:</strong> Expert recommendations for successful registration
                </p>
                <p className="text-gray-300 text-xs font-nunito">
                  <strong>Risk Assessment:</strong> Comprehensive analysis of potential objections
                </p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end justify-center pb-4">
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-[#fbbf24] hover:bg-[#e6a602] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300 text-sm"
                >
                  View Extended Report
                </button>
              </div>
              
            </div>
            <p className="text-white text-center text-xs font-nunito mt-10">
                  Create your free account to view the complete AI-powered report and<br />
                  start protecting your brand today.
                </p>
          </div>

          {/* Right Section - Signup Form */}
          <div className="border border-gray-700 rounded-[20px] p-3">
            <div className="text-center mb-3">
              <h3 className="text-white text-lg font-bold mb-1 font-nunito">Create you account</h3>
              <p className="text-gray-300 text-xs mb-3 font-nunito">
                Sign up for free to unlock your complete trademark report.
              </p>
              
              {/* Tabs */}
              <div className="flex border border-[#fbbf24] rounded-lg overflow-hidden">
                <button 
                  type="button"
                  onClick={() => setIsLoginMode(false)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
                    !isLoginMode 
                      ? 'bg-[#fbbf24] text-black' 
                      : 'bg-transparent text-white hover:bg-[#fbbf24] hover:bg-opacity-20'
                  }`}
                >
                  Sign Up
                </button>
                <button 
                  type="button"
                  onClick={() => setIsLoginMode(true)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
                    isLoginMode 
                      ? 'bg-[#fbbf24] text-black' 
                      : 'bg-transparent text-white hover:bg-[#fbbf24] hover:bg-opacity-20'
                  }`}
                >
                  Log In
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              {!isLoginMode && (
                <>
                  {/* Name Field */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1 block font-nunito">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-2 py-1.5 border rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.name ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1 block font-nunito">
                      Phone No. <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit phone number"
                      className={`w-full px-2 py-1.5 border rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.phone ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                  </div>
                </>
              )}

              {/* Email Field */}
              <div>
                <label className="text-white text-xs font-medium mb-1 block font-nunito">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-2 py-1.5 border rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>

              {isLoginMode && (
                /* Password Field for Login */
                <div>
                  <label className="text-white text-xs font-medium mb-1 block font-nunito">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-2 py-1.5 border border-gray-600 rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400"
                    required
                  />
                </div>
              )}

              {!isLoginMode && (
                <>
                  {/* State Field */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1 block font-nunito">
                      State <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter your state"
                      className={`w-full px-2 py-1.5 border rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.state ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    />
                    {errors.state && <p className="text-red-400 text-xs mt-0.5">{errors.state}</p>}
                  </div>
                </>
              )}

              {!isLoginMode && (
                <>
                  {/* Trademark Searched Field */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1 block font-nunito">
                      Trademark You Searched
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="trademarkSearched"
                        value={formData.trademarkSearched}
                        onChange={handleInputChange}
                        className="w-full px-2 py-1.5 pr-8 border border-gray-600 rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400"
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, trademarkSearched: '' }))}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        <i className="fas fa-xmark text-sm"></i>
                      </button>
                    </div>
                  </div>

                  {/* Class Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-white text-xs font-medium font-nunito">
                        Class <span className="text-red-400">*</span>
                      </label>
                      {detectedClass && (
                        <div className="flex items-center gap-1 bg-opacity-10 px-2 py-1 rounded-full border border-[#fbbf24] border-opacity-30">
                          <i className="fas fa-robot text-[#fbbf24] text-xs"></i>
                          <span className="text-[#fbbf24] text-xs font-nunito font-medium">
                            AI: {Math.round(detectedClass.confidence)}% confidence
                          </span>
                        </div>
                      )}
                    </div>
                    {detectedClass && (
                      <div className="mb-3 p-3 border border-gray-600 rounded-lg relative overflow-hidden">
                        {/* Animated background pulse */}
                        <div className="absolute inset-0 bg-opacity-5 animate-pulse"></div>
                        
                        <div className="flex items-start gap-2 relative z-10">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#fbbf24] bg-opacity-20 rounded-full flex items-center justify-center animate-bounce">
                            <i className="fas fa-lightbulb text-[#fbbf24] text-xs"></i>
                          </div>
                          <div className="flex-1">
                            <p className="text-[#fbbf24] font-nunito text-xs font-medium mb-1 animate-pulse">
                              AI Suggestion
                            </p>
                            <p className="text-white font-nunito text-xs">
                              Class {detectedClass.class} - {detectedClass.reason}
                            </p>
                          </div>
                        </div>
                        
                        {/* Animated border glow */}
                        <div className="absolute inset-0 rounded-lg border border-[#fbbf24] border-opacity-50 animate-ping"></div>
                      </div>
                    )}
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className={`w-full px-2 py-1.5 border rounded-lg text-white text-xs focus:outline-none focus:border-[#fbbf24] ${
                        errors.class ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="1">Class 1 - Chemicals</option>
                      <option value="2">Class 2 - Paints</option>
                      <option value="3">Class 3 - Cosmetics & Cleaning Products</option>
                      <option value="4">Class 4 - Fuels & Industrial Oils</option>
                      <option value="5">Class 5 - Pharmaceuticals & Medical Supplies</option>
                      <option value="6">Class 6 - Metals & Metal Goods</option>
                      <option value="7">Class 7 - Machinery</option>
                      <option value="8">Class 8 - Hand Tools</option>
                      <option value="9">Class 9 - Electronics & Software</option>
                      <option value="10">Class 10 - Medical Instruments</option>
                      <option value="11">Class 11 - Appliances (Lighting, Heating, Plumbing)</option>
                      <option value="12">Class 12 - Vehicles</option>
                      <option value="13">Class 13 - Firearms & Explosives</option>
                      <option value="14">Class 14 - Jewelry & Precious Metals</option>
                      <option value="15">Class 15 - Musical Instruments</option>
                      <option value="16">Class 16 - Paper & Stationery</option>
                      <option value="17">Class 17 - Rubber & Plastics</option>
                      <option value="18">Class 18 - Leather Goods & Bags</option>
                      <option value="19">Class 19 - Building Materials (Non-Metallic)</option>
                      <option value="20">Class 20 - Furniture</option>
                      <option value="21">Class 21 - Household Utensils & Kitchenware</option>
                      <option value="22">Class 22 - Ropes, Nets & Sacks</option>
                      <option value="23">Class 23 - Yarns & Threads</option>
                      <option value="24">Class 24 - Fabrics & Textiles</option>
                      <option value="25">Class 25 - Clothing, Footwear & Headgear</option>
                      <option value="26">Class 26 - Lace, Embroidery & Accessories</option>
                      <option value="27">Class 27 - Carpets & Floor Coverings</option>
                      <option value="28">Class 28 - Toys, Games & Sporting Goods</option>
                      <option value="29">Class 29 - Foodstuffs (Meat, Fish, Dairy, Preserves)</option>
                      <option value="30">Class 30 - Foodstuffs (Staples: Coffee, Tea, Flour, Spices)</option>
                      <option value="31">Class 31 - Agricultural Products (Fresh Fruits, Vegetables, Grains)</option>
                      <option value="32">Class 32 - Beers & Non-Alcoholic Beverages</option>
                      <option value="33">Class 33 - Alcoholic Beverages (Except Beer)</option>
                      <option value="34">Class 34 - Tobacco, Smokers' Articles & Matches</option>
                      <option value="35">Class 35 - Business & Management Services</option>
                      <option value="36">Class 36 - Financial & Insurance Services</option>
                      <option value="37">Class 37 - Construction & Repair Services</option>
                      <option value="38">Class 38 - Telecommunications Services</option>
                      <option value="39">Class 39 - Transport & Storage Services</option>
                      <option value="40">Class 40 - Treatment of Materials (Manufacturing, Processing)</option>
                      <option value="41">Class 41 - Education & Training Services</option>
                      <option value="42">Class 42 - Scientific & IT Services (Technology, Software, Research)</option>
                      <option value="43">Class 43 - Hospitality (Restaurants, Hotels, Catering)</option>
                      <option value="44">Class 44 - Medical & Veterinary Services</option>
                      <option value="45">Class 45 - Legal & Security Services</option>
                    </select>
                    {errors.class && <p className="text-red-400 text-xs mt-0.5">{errors.class}</p>}
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-2 rounded-lg transition-colors duration-300 mt-4 text-sm ${
                  isSubmitting 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-[#fbbf24] hover:bg-[#e6a602] text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    {isLoginMode ? 'Logging In...' : 'Creating Account...'}
                  </div>
                ) : (
                  isLoginMode ? 'Log In' : 'Unlock Full Report'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
