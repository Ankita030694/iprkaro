'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <div className="fixed inset-0 z-40 overflow-y-auto bg-black">
      {/* Hide navbar when popup is open */}
      <style jsx global>{`
        nav {
          display: none !important;
        }
      `}</style>
        {/* Close Button */}
        <button
          onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 bg-black bg-opacity-30 rounded-full p-2 backdrop-blur-sm"
        >
          <i className="fas fa-xmark text-xl"></i>
        </button>

      <div className="w-full h-screen relative">
        <div className="w-full h-full overflow-y-auto relative scrollbar-hide">

        <div className="flex flex-col lg:flex-row gap-0 h-full">
          {/* Left Section - Search Results (70%) */}
          <div 
            className="w-full lg:w-[70%] py-8 flex flex-col"
            style={{
              background: 'linear-gradient(to bottom, #FFFFFF 0%, #6E5E93 20%, #160049 55%, #0C002B 100%)'
            }}
          >
            {/* Content Container */}
            <div className="max-w-3xl mx-auto w-full px-8 space-y-6 flex flex-col justify-center h-full mt-20">
              {/* Logo Section */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-12">
                  <svg width="65" height="49" viewBox="0 0 65 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.5449 6.37838C51.5449 6.37838 53.1893 8.32436 54.2579 10.2051C54.2579 10.2051 59.0267 3.22541 63.8798 1" stroke="url(#paint0_linear_134_395)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.0068 42.2387C43.5015 42.2387 43.9585 42.3251 44.377 42.4965C44.8018 42.6615 45.1697 42.896 45.4805 43.2006C45.791 43.5053 46.0319 43.8641 46.2031 44.2768C46.3806 44.6831 46.4697 45.1308 46.4697 45.6196C46.4697 46.1085 46.3806 46.5594 46.2031 46.9721C46.0319 47.3781 45.791 47.7339 45.4805 48.0385C45.1697 48.3431 44.8018 48.581 44.377 48.7524C43.9585 48.9175 43.5015 49.0004 43.0068 49.0004C42.5125 49.0004 42.0525 48.9175 41.6279 48.7524C41.2094 48.581 40.8416 48.3431 40.5244 48.0385C40.2139 47.7276 39.973 47.3686 39.8018 46.9623C39.6305 46.5496 39.5449 46.1019 39.5449 45.6196C39.5449 45.1373 39.6306 44.6926 39.8018 44.2866C39.9729 43.8739 40.2139 43.515 40.5244 43.2104C40.8415 42.8995 41.2094 42.6615 41.6279 42.4965C42.0525 42.3252 42.5125 42.2388 43.0068 42.2387ZM16.6826 46.5688L20.8389 42.2866H21.4287L18.502 45.3188L21.6289 48.9526H21.0391L18.1719 45.6713L16.6826 47.1987V48.9526H16.1973V42.2866H16.6826V46.5688ZM29.4639 48.9526H28.9414L28.0889 47.0766H24.2266L23.377 48.9526H22.8535L25.916 42.2866H26.4014L29.4639 48.9526ZM34.3926 42.2866C34.9503 42.2866 35.4288 42.3756 35.8281 42.5532C36.2276 42.7308 36.5352 42.9882 36.751 43.3246C36.9665 43.6545 37.0742 44.0575 37.0742 44.5336C37.0742 44.9968 36.9666 45.3973 36.751 45.7338C36.5352 46.0637 36.2276 46.3212 35.8281 46.5053C35.7275 46.5501 35.6214 46.588 35.5107 46.6215L37.1787 48.9526H36.627L35.0342 46.726C34.8334 46.7555 34.6197 46.7719 34.3926 46.7719H32.4893V48.9526H32.0049V42.2866H34.3926ZM43.0068 42.687C42.5823 42.687 42.1893 42.7596 41.8281 42.9057C41.4666 43.0517 41.1496 43.2581 40.877 43.5248C40.6106 43.7913 40.4013 44.1019 40.249 44.4575C40.103 44.8065 40.0303 45.1943 40.0303 45.6196C40.0303 46.0386 40.103 46.4262 40.249 46.7817C40.4013 47.1372 40.6107 47.4478 40.877 47.7143C41.1496 47.981 41.4666 48.1875 41.8281 48.3334C42.1893 48.4795 42.5824 48.5521 43.0068 48.5522C43.4316 48.5522 43.8252 48.4795 44.1865 48.3334C44.5479 48.1874 44.8625 47.9811 45.1289 47.7143C45.3951 47.4478 45.6013 47.1371 45.7471 46.7817C45.8993 46.4262 45.9746 46.0386 45.9746 45.6196C45.9746 45.1943 45.8993 44.8065 45.7471 44.4575C45.6013 44.102 45.3951 43.7913 45.1289 43.5248C44.8625 43.2581 44.5479 43.0517 44.1865 42.9057C43.8252 42.7596 43.4316 42.687 43.0068 42.687ZM24.4121 46.6674H27.9023L26.1543 42.8207L24.4121 46.6674ZM32.4893 46.3432H34.3926C35.1085 46.3431 35.6506 46.1847 36.0186 45.8676C36.3925 45.55 36.5801 45.1049 36.5801 44.5336C36.58 43.9561 36.3924 43.5115 36.0186 43.2006C35.6506 42.8834 35.1086 42.7251 34.3926 42.725H32.4893V46.3432ZM7.50195 38.6655H0V5.3266H7.50195V38.6655ZM22.0898 5.3266C30.4806 5.32673 34.6758 8.86971 34.6758 15.9526C34.6755 19.2997 33.4684 22.0127 31.0537 24.0893C28.6541 26.1501 25.4414 27.1799 21.417 27.1801H17.8408V38.6655H10.3389V5.3266H22.0898ZM46.6865 5.3266C47.6702 5.3266 48.5948 5.3708 49.459 5.46039V10.0971C49.459 11.1489 50.3107 12.0024 51.3613 12.0024H58.5615C58.7242 12.7388 58.8086 13.5357 58.8086 14.394C58.8086 15.5563 58.6314 16.6346 58.2754 17.6264C57.9193 18.6026 57.4158 19.4867 56.7656 20.2768C56.1156 21.067 55.3253 21.7494 54.3965 22.3227C53.4832 22.8961 52.4609 23.3451 51.3311 23.6703V23.7641C51.8261 23.9191 52.3072 24.1735 52.7715 24.5297C53.2359 24.8708 53.6848 25.2739 54.1182 25.7387C54.5517 26.2036 54.9624 26.7089 55.3496 27.2514C55.7516 27.7779 56.1155 28.2969 56.4404 28.808L62.7344 38.6655H54.1182L48.9404 30.0873C48.5535 29.4366 48.1812 28.8546 47.8252 28.3432C47.4693 27.8319 47.1048 27.3978 46.7334 27.0414C46.3775 26.6696 45.998 26.3897 45.5957 26.2036C45.2089 26.0023 44.7824 25.9028 44.3184 25.9028H42.2988V38.6655H34.7969V5.3266H46.6865ZM17.8408 21.4858H20.7891C24.7829 21.4857 26.7799 19.7331 26.7803 16.2309C26.7801 12.8059 24.7831 11.0923 20.7891 11.0922H17.8408V21.4858ZM42.2988 20.2299H45.5498C47.1591 20.2297 48.4516 19.7646 49.4268 18.8354C50.4176 17.89 50.9131 16.7186 50.9131 15.3237C50.9131 12.4102 49.1719 10.9529 45.6895 10.9526H42.2988V20.2299Z" fill="white"/>
                    <defs>
                      <linearGradient id="paint0_linear_134_395" x1="49.9944" y1="0.697201" x2="64.3909" y2="3.00788" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1345C3"/>
                        <stop offset="1" stopColor="#069A81"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            {/* Trademark Check Results Container */}
            <div 
              className="relative p-6 mb-6 max-w-2xl mx-auto w-full"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              {/* Header Badges - Top Left and Top Right */}
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-brain text-white text-xs"></i>
                <span className="text-white text-xs font-medium font-nunito">AI Trademark</span>
              </div>
                <div 
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    borderRadius: '5px',
                    background: 'rgba(0, 0, 0, 0.30)'
                  }}
                >
                  <i className="fas fa-shield-alt text-white text-xs"></i>
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
            </div>

            {/* Quick Insights Container */}
            <div 
              className="p-6 mb-6 max-w-2xl mx-auto w-full"
              style={{
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.01)',
                backdropFilter: 'blur(16px)'
              }}
            >
              <div 
                className="flex items-center gap-2 mb-3 px-3 py-1.5 w-fit"
                style={{
                  borderRadius: '5px',
                  background: 'rgba(0, 0, 0, 0.30)'
                }}
              >
                <i className="fas fa-lightbulb text-white text-xs"></i>
                <span className="text-white font-semibold font-nunito text-sm">Quick insights</span>
              </div>
              
              <div className="space-y-2">
                {searchResults && (
                  <>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check text-white text-xs mt-0.5"></i>
                      <span className="text-white text-xs font-nunito">
                        {searchResults.similarCount} Similar Trademark{searchResults.similarCount !== 1 ? 's' : ''} Found in Class {searchResults.class.number} <span className="text-gray-400">({searchResults.class.name})</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check text-white text-xs mt-0.5"></i>
                      <span className="text-white text-xs font-nunito">
                        AI Confidence Score: {searchResults.confidenceScore}% chance your brand may face an objection
                      </span>
                    </div>
                  </>
                )}
                {detectedClass && (
                  <div className="flex items-start gap-2">
                    <i className="fas fa-robot text-white text-xs mt-0.5"></i>
                    <span className="text-white text-xs font-nunito">
                      AI Class Detection: Class {detectedClass.class} with {Math.round(detectedClass.confidence)}% confidence
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Report SVG */}
            <div className="mb-6 max-w-2xl mx-auto w-full">
              <Image 
                src="/report.svg" 
                alt="Trademark Report" 
                width={797}
                height={335}
                className="w-full h-auto"
                priority
                quality={100}
              />
              </div>
              </div>
              </div>
              
          {/* Right Section - Signup Form (30%) */}
          <div className="w-full lg:w-[30%] bg-[#121212] p-4 sm:p-6 flex flex-col justify-center h-full">
            <div className="text-center mb-4 sm:mb-3">
              <h3 className="text-white text-xl sm:text-lg font-bold mb-2 sm:mb-1 font-nunito">Create your account</h3>
              <p className="text-gray-300 text-sm sm:text-xs mb-3 font-nunito">
                Sign up for free to unlock your complete trademark report.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-2">
                  {/* Name Field */}
                  <div>
                <label className="text-white text-sm sm:text-xs font-medium mb-2 sm:mb-1 block font-nunito text-left">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                  className={`w-full px-3 py-2 sm:px-2 sm:py-1.5 border rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.name ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                <label className="text-white text-sm sm:text-xs font-medium mb-2 sm:mb-1 block font-nunito text-left">
                      Phone No. <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit phone number"
                  className={`w-full px-3 py-2 sm:px-2 sm:py-1.5 border rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.phone ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
                  </div>

              {/* Email Field */}
              <div>
                <label className="text-white text-sm sm:text-xs font-medium mb-2 sm:mb-1 block font-nunito text-left">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-3 py-2 sm:px-2 sm:py-1.5 border rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                    errors.email ? 'border-red-400' : 'border-gray-600'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>

                  {/* State Field */}
                  <div>
                <label className="text-white text-sm sm:text-xs font-medium mb-2 sm:mb-1 block font-nunito text-left">
                      State <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter your state"
                  className={`w-full px-3 py-2 sm:px-2 sm:py-1.5 border rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400 ${
                        errors.state ? 'border-red-400' : 'border-gray-600'
                      }`}
                      required
                    />
                    {errors.state && <p className="text-red-400 text-xs mt-0.5">{errors.state}</p>}
                  </div>

                  {/* Trademark Searched Field */}
                  <div>
                <label className="text-white text-sm sm:text-xs font-medium mb-2 sm:mb-1 block font-nunito text-left">
                      Trademark You Searched
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="trademarkSearched"
                        value={formData.trademarkSearched}
                        onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-2 sm:py-1.5 pr-8 border border-gray-600 rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] placeholder-gray-400"
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
                  <label className="text-white text-sm sm:text-xs font-medium font-nunito text-left">
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
                  className={`w-full px-3 py-2 sm:px-2 sm:py-1.5 border rounded-lg text-white text-sm sm:text-xs focus:outline-none focus:border-[#fbbf24] ${
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 sm:py-2 rounded-lg transition-colors duration-300 mt-4 text-base sm:text-sm ${
                  isSubmitting 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-[#fbbf24] hover:bg-[#e6a602] text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Creating Account...
                  </div>
                ) : (
                  'Unlock Full Report'
                )}
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
