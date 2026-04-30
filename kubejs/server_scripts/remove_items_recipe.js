// ============================================================
// Remove banned items from all recipes and loot tables
// ============================================================

const BANNED_ITEMS = [
    
    'dungeonsdelight:poi',
    'dungeonsdelight:rubaboo',
    'dungeonsdelight:spider_salmagundi',
    'dungeonsdelight:salt_soaked_stew',
    
    'culturaldelights:glow_squid',
    'culturaldelights:squid',
    'culturaldelights:cooked_squid',
    'culturaldelights:raw_calamari',
    'culturaldelights:cooked_calamari',
    
    'oceansdelight:tentacles',
    'oceansdelight:cut_tentacles',
    'oceansdelight:tentacle_on_a_stick',
    'oceansdelight:baked_tentacle_on_a_stick',
    
    'culturaldelights:cooked_calamari',
    'culturaldelights:raw_calamari',
    'culturaldelights:cooked_squid',
    'culturaldelights:squid',
    'culturaldelights:glow_squid'
    
]

// Remove all recipes that output any banned item
ServerEvents.recipes(event => {
    event.remove({ id: 'minersdelight:tentacles_on_a_stick' }),
    event.remove({ id: 'culturalrecipes:cutting/raw_calamari' }),
    event.remove({ id: 'culturalrecipes:cutting/raw_calamari_from_glowsquid' })
})  