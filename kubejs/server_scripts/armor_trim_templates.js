ServerEvents.recipes(event => {

  // ANGLER -> TIDE
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:tide_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:angler_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_angler_template', ['kubejs:incomplete_angler_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_angler_template', 'kubejs:incomplete_angler_template'),
      event.recipes.create.filling('kubejs:incomplete_angler_template', ['kubejs:incomplete_angler_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_angler_template', 'kubejs:incomplete_angler_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_angler_template')
  .loops(4);

  // ARCHER -> WAYFINDER
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:wayfinder_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:archer_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_archer_template', ['kubejs:incomplete_archer_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_archer_template', 'kubejs:incomplete_archer_template'),
      event.recipes.create.filling('kubejs:incomplete_archer_template', ['kubejs:incomplete_archer_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_archer_template', 'kubejs:incomplete_archer_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_archer_template')
  .loops(4);

  // BLADE -> BOLT
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:bolt_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:blade_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_blade_template', ['kubejs:incomplete_blade_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_blade_template', 'kubejs:incomplete_blade_template'),
      event.recipes.create.filling('kubejs:incomplete_blade_template', ['kubejs:incomplete_blade_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_blade_template', 'kubejs:incomplete_blade_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_blade_template')
  .loops(4);

  // BREWER -> SHAPER
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:shaper_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:brewer_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_brewer_template', ['kubejs:incomplete_brewer_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_brewer_template', 'kubejs:incomplete_brewer_template'),
      event.recipes.create.filling('kubejs:incomplete_brewer_template', ['kubejs:incomplete_brewer_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_brewer_template', 'kubejs:incomplete_brewer_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_brewer_template')
  .loops(4);

  // BURN -> BLAST
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('supplementaries:blast_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:burn_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_burn_template', ['kubejs:incomplete_burn_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_burn_template', 'kubejs:incomplete_burn_template'),
      event.recipes.create.filling('kubejs:incomplete_burn_template', ['kubejs:incomplete_burn_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_burn_template', 'kubejs:incomplete_burn_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_burn_template')
  .loops(4);

  // DANGER -> SENTRY
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:sentry_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:danger_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_danger_template', ['kubejs:incomplete_danger_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_danger_template', 'kubejs:incomplete_danger_template'),
      event.recipes.create.filling('kubejs:incomplete_danger_template', ['kubejs:incomplete_danger_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_danger_template', 'kubejs:incomplete_danger_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_danger_template')
  .loops(4);

  // FLOW -> FLOW
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:flow_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:flow_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_flow_template', ['kubejs:incomplete_flow_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_flow_template', 'kubejs:incomplete_flow_template'),
      event.recipes.create.filling('kubejs:incomplete_flow_template', ['kubejs:incomplete_flow_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_flow_template', 'kubejs:incomplete_flow_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_flow_template')
  .loops(4);

  // EXPLORER -> WILD
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:wild_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:explorer_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_explorer_template', ['kubejs:incomplete_explorer_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_explorer_template', 'kubejs:incomplete_explorer_template'),
      event.recipes.create.filling('kubejs:incomplete_explorer_template', ['kubejs:incomplete_explorer_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_explorer_template', 'kubejs:incomplete_explorer_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_explorer_template')
  .loops(4);

  // FRIEND -> HOST
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:host_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:friend_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_friend_template', ['kubejs:incomplete_friend_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_friend_template', 'kubejs:incomplete_friend_template'),
      event.recipes.create.filling('kubejs:incomplete_friend_template', ['kubejs:incomplete_friend_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_friend_template', 'kubejs:incomplete_friend_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_friend_template')
  .loops(4);

  // GUSTER -> VEX
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:vex_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:guster_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_guster_template', ['kubejs:incomplete_guster_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_guster_template', 'kubejs:incomplete_guster_template'),
      event.recipes.create.filling('kubejs:incomplete_guster_template', ['kubejs:incomplete_guster_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_guster_template', 'kubejs:incomplete_guster_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_guster_template')
  .loops(4);

  // HEART -> WARD
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:ward_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:heart_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_heart_template', 'kubejs:incomplete_heart_template'),
      event.recipes.create.filling('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_heart_template', 'kubejs:incomplete_heart_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_heart_template')
  .loops(4);

  // HOWL -> SNOUT
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:snout_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:howl_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_howl_template', ['kubejs:incomplete_howl_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_howl_template', 'kubejs:incomplete_howl_template'),
      event.recipes.create.filling('kubejs:incomplete_howl_template', ['kubejs:incomplete_howl_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_howl_template', 'kubejs:incomplete_howl_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_howl_template')
  .loops(4);

  // MINER -> RAISER
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:raiser_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:miner_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_miner_template', ['kubejs:incomplete_miner_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_miner_template', 'kubejs:incomplete_miner_template'),
      event.recipes.create.filling('kubejs:incomplete_miner_template', ['kubejs:incomplete_miner_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_miner_template', 'kubejs:incomplete_miner_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_miner_template')
  .loops(4);

  // MOURNER -> RIB
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:rib_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:mourner_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_mourner_template', ['kubejs:incomplete_mourner_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_mourner_template', 'kubejs:incomplete_mourner_template'),
      event.recipes.create.filling('kubejs:incomplete_mourner_template', ['kubejs:incomplete_mourner_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_mourner_template', 'kubejs:incomplete_mourner_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_mourner_template')
  .loops(4);

  // PLENTY -> COAST
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:coast_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:plenty_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_plenty_template', ['kubejs:incomplete_plenty_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_plenty_template', 'kubejs:incomplete_plenty_template'),
      event.recipes.create.filling('kubejs:incomplete_plenty_template', ['kubejs:incomplete_plenty_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_plenty_template', 'kubejs:incomplete_plenty_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_plenty_template')
  .loops(4);

  // PRIZE -> EYE
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:eye_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:prize_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_prize_template', ['kubejs:incomplete_prize_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_prize_template', 'kubejs:incomplete_prize_template'),
      event.recipes.create.filling('kubejs:incomplete_prize_template', ['kubejs:incomplete_prize_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_prize_template', 'kubejs:incomplete_prize_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_prize_template')
  .loops(4);

  // SHELTER -> SILENCE
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:silence_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:shelter_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_shelter_template', ['kubejs:incomplete_shelter_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_shelter_template', 'kubejs:incomplete_shelter_template'),
      event.recipes.create.filling('kubejs:incomplete_shelter_template', ['kubejs:incomplete_shelter_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_shelter_template', 'kubejs:incomplete_shelter_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_shelter_template')
  .loops(4);

  // SKULL -> SPIRE
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:spire_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:skull_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_skull_template', ['kubejs:incomplete_skull_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_skull_template', 'kubejs:incomplete_skull_template'),
      event.recipes.create.filling('kubejs:incomplete_skull_template', ['kubejs:incomplete_skull_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_skull_template', 'kubejs:incomplete_skull_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_skull_template')
  .loops(4);

  // SNORT -> DUNE
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('minecraft:dune_armor_trim_smithing_template', 50),
      CreateItem.of('minecraft:brick', 25),
      CreateItem.of('minecraft:clay_ball', 25)
    ],
    'minecraft:snort_pottery_sherd',
    [
      event.recipes.create.filling('kubejs:incomplete_snort_template', ['kubejs:incomplete_snort_template', Fluid.lava(250)]),
      event.recipes.create.pressing('kubejs:incomplete_snort_template', 'kubejs:incomplete_snort_template'),
      event.recipes.create.filling('kubejs:incomplete_snort_template', ['kubejs:incomplete_snort_template', Fluid.water(250)]),
      event.recipes.create.cutting('kubejs:incomplete_snort_template', 'kubejs:incomplete_snort_template').processingTime(100)
    ]
  )
  .transitionalItem('kubejs:incomplete_snort_template')
  .loops(4);

});
