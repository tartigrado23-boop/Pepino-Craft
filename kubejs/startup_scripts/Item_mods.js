ItemEvents.modification(event => {

  // pickaxes
  event.modify('minecraft:wooden_pickaxe', item => {
    item.maxDamage = 64
  })
  event.modify('create_sa:copper_pickaxe', item => {
    item.maxDamage = 256
  })
  event.modify('minecraft:iron_pickaxe', item => {
    item.maxDamage = 512
    item.tier = tier => {
      tier.speed = 7
    }
  })
  event.modify('minecraft:golden_pickaxe', item => {
    item.maxDamage = 128
  })
  event.modify('minecraft:diamond_pickaxe', item => {
    item.maxDamage = 16
  })
  event.modify('create_sa:blazing_pickaxe', item => {
    item.maxDamage = 256
  })
  event.modify('create_sa:brass_pickaxe', item => {
    item.maxDamage = 1024
  })
  event.modify('create_sa:rose_quartz_pickaxe', item => {
    item.maxDamage = 2048
  })
  event.modify('minecraft:netherite_pickaxe', item => {
    item.maxDamage = 4096
  })

  // axes
  event.modify('minecraft:wooden_axe', item => {
    item.maxDamage = 64
  })
  event.modify('minecraft:stone_axe', item => {
    item.maxDamage = 132
  })
  event.modify('minecraft:iron_axe', item => {
    item.maxDamage = 512
  })
  event.modify('minecraft:golden_axe', item => {
    item.maxDamage = 128
  })
  event.modify('minecraft:diamond_axe', item => {
    item.maxDamage = 16
  })
  event.modify('create_sa:blazing_axe', item => {
    item.maxDamage = 256
  })
  event.modify('create_sa:brass_axe', item => {
    item.maxDamage = 1024
  })
  event.modify('create_sa:rose_quartz_axe', item => {
    item.maxDamage = 2048
  })
  event.modify('minecraft:netherite_axe', item => {
    item.maxDamage = 4096
  })

  // shovels
  event.modify('minecraft:wooden_shovel', item => {
    item.maxDamage = 64
  })
  event.modify('minecraft:stone_shovel', item => {
    item.maxDamage = 132
  })
  event.modify('minecraft:iron_shovel', item => {
    item.maxDamage = 512
  })
  event.modify('minecraft:golden_shovel', item => {
    item.maxDamage = 128
  })
  event.modify('minecraft:diamond_shovel', item => {
    item.maxDamage = 16
  })
  event.modify('create_sa:blazing_shovel', item => {
    item.maxDamage = 256
  })
  event.modify('create_sa:brass_shovel', item => {
    item.maxDamage = 1024
  })
  event.modify('create_sa:rose_quartz_shovel', item => {
    item.maxDamage = 2048
  })
  event.modify('minecraft:netherite_shovel', item => {
    item.maxDamage = 4096
  })

  // hoe
  event.modify('minecraft:wooden_hoe', item => {
    item.maxDamage = 64
  })
  event.modify('minecraft:stone_hoe', item => {
    item.maxDamage = 132
  })
  event.modify('minecraft:iron_hoe', item => {
    item.maxDamage = 512
  })
  event.modify('minecraft:golden_hoe', item => {
    item.maxDamage = 128
  })
  event.modify('minecraft:diamond_hoe', item => {
    item.maxDamage = 16
  })
  event.modify('create_sa:blazing_hoe', item => {
    item.maxDamage = 256
  })
  event.modify('create_sa:brass_hoe', item => {
    item.maxDamage = 1024
  })
  event.modify('create_sa:rose_quartz_hoe', item => {
    item.maxDamage = 2048
  })
  event.modify('minecraft:netherite_hoe', item => {
    item.maxDamage = 4096
  })

  // sword
  event.modify('minecraft:wooden_sword', item => {
    item.maxDamage = 64
  })
  event.modify('minecraft:stone_sword', item => {
    item.maxDamage = 132
  })
  event.modify('minecraft:iron_sword', item => {
    item.maxDamage = 512
  })
  event.modify('minecraft:golden_sword', item => {
    item.maxDamage = 128
  })
  event.modify('minecraft:diamond_sword', item => {
    item.maxDamage = 16
  })
  event.modify('create_sa:blazing_sword', item => {
    item.maxDamage = 256
  })
  event.modify('create_sa:brass_sword', item => {
    item.maxDamage = 1024
  })
  event.modify('create_sa:rose_quartz_sword', item => {
    item.maxDamage = 2048
  })
  event.modify('minecraft:netherite_sword', item => {
    item.maxDamage = 4096
  })

  // larmor
  event.modify('minecraft:leather_helmet', item => {
    item.maxDamage = 55
  })
  event.modify('minecraft:leather_chestplate', item => {
    item.maxDamage = 80
  })
  event.modify('minecraft:leather_leggings', item => {
    item.maxDamage = 75
  })
  event.modify('minecraft:leather_boots', item => {
    item.maxDamage = 65
  })

  // carmor
  event.modify('minecraft:chainmail_helmet', item => {
    item.maxDamage = 112
  })
  event.modify('minecraft:chainmail_chestplate', item => {
    item.maxDamage = 124
  })
  event.modify('minecraft:chainmail_leggings', item => {
    item.maxDamage = 116
  })
  event.modify('minecraft:chainmail_boots', item => {
    item.maxDamage = 108
  })

  // copparmor
  event.modify('create_sa:copper_helmet', item => {
    item.maxDamage = 112
  })
  event.modify('create_sa:copper_chestplate', item => {
    item.maxDamage = 124
  })
  event.modify('create_sa:copper_leggings', item => {
    item.maxDamage = 116
  })
  event.modify('create_sa:copper_boots', item => {
    item.maxDamage = 108
  })

  // iarmor
  event.modify('minecraft:iron_helmet', item => {
    item.maxDamage = 166
  })
  event.modify('minecraft:iron_chestplate', item => {
    item.maxDamage = 241
  })
  event.modify('minecraft:iron_leggings', item => {
    item.maxDamage = 226
  })
  event.modify('minecraft:iron_boots', item => {
    item.maxDamage = 196
  })

  // garmor
  event.modify('minecraft:golden_helmet', item => {
    item.maxDamage = 166
  })
  event.modify('minecraft:golden_chestplate', item => {
    item.maxDamage = 241
  })
  event.modify('minecraft:golden_leggings', item => {
    item.maxDamage = 226
  })
  event.modify('minecraft:golden_boots', item => {
    item.maxDamage = 196
  })

  // darmor
  event.modify('minecraft:diamond_helmet', item => {
    item.maxDamage = 55
  })
  event.modify('minecraft:diamond_chestplate', item => {
    item.maxDamage = 80
  })
  event.modify('minecraft:diamond_leggings', item => {
    item.maxDamage = 75
  })
  event.modify('minecraft:diamond_boots', item => {
    item.maxDamage = 65
  })

  // barmor
  event.modify('create_sa:brass_helmet', item => {
    item.maxDamage = 112
  })
  event.modify('create_sa:brass_chestplate', item => {
    item.maxDamage = 124
  })
  event.modify('create_sa:brass_leggings', item => {
    item.maxDamage = 116
  })
  event.modify('create_sa:brass_boots', item => {
    item.maxDamage = 108
  })

  // narmor
  event.modify('minecraft:netherite_helmet', item => {
    item.maxDamage = 407
  })
  event.modify('minecraft:netherite_chestplate', item => {
    item.maxDamage = 592
  })
  event.modify('minecraft:netherite_leggings', item => {
    item.maxDamage = 555
  })
  event.modify('minecraft:netherite_boots', item => {
    item.maxDamage = 481
  })

})