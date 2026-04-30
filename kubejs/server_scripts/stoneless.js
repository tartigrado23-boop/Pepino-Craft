ServerEvents.recipes(event => {
    // Remove all stone tool recipes
    event.remove({ output: "minecraft:stone_pickaxe" })
    event.remove({ output: "minecraft:stone_axe" })
    event.remove({ output: "minecraft:stone_shovel" })
    event.remove({ output: "minecraft:stone_hoe" })
    event.remove({ output: "minecraft:stone_sword" })
})

ItemEvents.modifyTooltips(event => {
  // Simple tooltip
  event.add('minecraft:stone_sword', '§6Stone is too brittle to craft this tool by hand.')
  event.add('minecraft:stone_axe', '§6Stone is too brittle to craft this tool by hand.')
  event.add('minecraft:stone_shovel', '§6Stone is too brittle to craft this tool by hand.')
  event.add('minecraft:stone_hoe', '§6Stone is too brittle to craft this tool by hand.')
  event.add('minecraft:stone_pickaxe', '§6Stone is too brittle to craft this tool by hand.')
  })
