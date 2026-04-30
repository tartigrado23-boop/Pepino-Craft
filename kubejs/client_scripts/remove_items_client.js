// ============================================================
// Hide banned items from JEI / EMI (1.21.1)
// ============================================================

const BANNED_ITEMS = [
    'toughasnails:apple_juice',
    'toughasnails:cactus_juice',
    'toughasnails:chorus_fruit_juice',
    'toughasnails:glow_berry_juice',
    'toughasnails:melon_juice',
    'toughasnails:pumpkin_juice',
    'toughasnails:sweet_berry_juice',
    'deeperdarker:resonarium',
    'deeperdarker:resonarium_helmet',
    'deeperdarker:resonarium_chestplate',
    'deeperdarker:resonarium_leggings',
    'deeperdarker:resonarium_boots',
    'deeperdarker:resonarium_sword',
    'deeperdarker:resonarium_pickaxe',
    'deeperdarker:resonarium_axe',
    'deeperdarker:resonarium_shovel',
    'deeperdarker:resonarium_hoe',
    'deeperdarker:resonarium_plate',

    'oceansdelight:tentacles',
    'oceansdelight:cut_tentacles',
    'oceansdelight:tentacle_on_a_stick',
    'oceansdelight:baked_tentacle_on_a_stick',
    
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_shovel',
    'minecraft:stone_hoe',
    'minecraft:stone_sword'

]

// Hide from recipe viewer (JEI/EMI)
RecipeViewerEvents.removeEntries('item', event => {
    for (const item of BANNED_ITEMS) {
        event.remove(item)
    }
})

// Also remove any recipes that use them as inputs or outputs
RecipeViewerEvents.removeRecipes(event => {
    for (const item of BANNED_ITEMS) {
        event.remove({ output: item })
        event.remove({ input: item })
    }
})
