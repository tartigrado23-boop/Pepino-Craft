ServerEvents.recipes(event => {
    // Remove all Stone Tool recipes
    const stoneTools = [
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe'
    ]
    
    stoneTools.forEach(tool => {
        event.remove({ output: tool })
    })
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', ['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'])
    event.remove('minecraft:needs_stone_tool', ['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'])

})