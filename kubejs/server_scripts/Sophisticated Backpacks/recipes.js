ServerEvents.recipes(event => {
    event.remove({output: "sophisticatedbackpacks:iron_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "C C",
            "PBP",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "minecraft:anvil"
            },
            "B": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "P": {
                "item": "create:packager"
            },
            "C": {
                "item": "minecraft:chain"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    })

    event.remove({output: "sophisticatedbackpacks:copper_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:copper_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
          "pattern": [
            "R R",
            "VBV",
            "CAC"
     ],
        "key": {
    "A": {
      "item": "minecraft:copper_block"
    },
    "B": {
      "item": "sophisticatedbackpacks:backpack"
    },
    "C": {
      "tag": "c:ingots/copper"
    },
    "R": {
      "item": "farmersdelight:rope"
    },
    "V": {
      "item": "farmersdelight:canvas"
    }
  },
        "result": {
            "item": "sophisticatedbackpacks:copper_backpack"
        }
    })

    event.remove({output: "sophisticatedbackpacks:gold_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:gold_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
          "pattern": [
            "V V",
            "EBE",
            "CAC"
     ],
        "key": {
    "A": {
      "item": "minecraft:gold_block"
    },
    "B": {
      "item": "sophisticatedbackpacks:iron_backpack"
    },
    "C": {
      "tag": "c:ingots/gold"
    },
    "V": {
      "item": "kubejs:tangled_nether_vines"
    },
    "E": {
      "item": "minecraft:ender_chest"
    }
  },
        "result": {
            "item": "sophisticatedbackpacks:gold_backpack"
        }
    })

    event.remove({output: "sophisticatedbackpacks:diamond_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
          "pattern": [
            "V V",
            "EBE",
            "CAC"
     ],
        "key": {
    "A": {
      "item": "minecraft:diamond_block"
    },
    "B": {
      "item": "sophisticatedbackpacks:gold_backpack"
    },
    "C": {
      "item": "minecraft:diamond"
    },
    "V": {
      "item": "crittersandcompanions:silk"
    },
    "E": {
      "item": "minecraft:echo_shard"
    }
  },
        "result": {
            "item": "sophisticatedbackpacks:diamond_backpack"
        }
    })

    event.remove({output: "sophisticatedbackpacks:backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SLS",
            "SBS",
            "LLL"
        ],
        "key": {
            "S": {
                "item": "minecraft:string"
            },
            "B": {
                "tag": "minecraft:bundles"
            },
            "L": {
                "item": "minecraft:leather"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:backpack"
        }
    })


})