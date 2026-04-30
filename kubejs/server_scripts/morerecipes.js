MoreJS.registerPotionBrewing(event => {
    event.addCustomBrewing(
        "minecraft:emerald", 
        "minecraft:nether_star",
        "minecraft:diamond")
}),

MoreJS.registerPotionBrewing(event => {
    event.addPotionBrewing(
        "minecraft:apple",
        "minecraft:water",
        "minecraft:strong_regeneration"
    )
}),


MoreJS.registerPotionBrewing(event => {
    event.addCustomBrewing(
        "minecraft:emerald", 
        "minecraft:glass_bottle",
        "minecraft:ominous_bottle")

    })

ServerEvents.recipes(event => {
    event.remove({ output: "create:mechanical_drill" })
    event.remove({ output: "create:mechanical_saw" })
    event.remove({ output: "create:mechanical_harvester" })
    event.remove({ output: "create:brass_ingot" })
    event.remove({ output: "create_sa:small_fueling_tank" })    
    event.remove({ output: "create_sa:small_filling_tank" }) 
    event.remove({ output: "create_sa:medium_fueling_tank" })    
    event.remove({ output: "create_sa:medium_filling_tank" }) 
    event.remove({ output: "create_sa:large_fueling_tank" })    
    event.remove({ output: "create_sa:large_filling_tank" }) 
    event.remove({ id: "create_mechanical_extruder:crafting/mechanical_extruder" })
    event.remove({ output: "create_sa:netherite_jetpack_chestplate" })
    event.remove({ output: "simulated:red_portable_engine" })
    event.remove({ output: "create:steam_engine" })
    event.remove({ output: "create:rotation_speed_controller" })
    event.remove({ id: "minecraft:netherite_ingot" })


    event.shapeless("kubejs:tangled_nether_vines", [
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:twisting_vines',
        'minecraft:weeping_vines'
    ])

    //event.shaped("sophisticatedbackpacks:backpack", [
        //"S S",
        //"SBS",
        //"LLL"
    //], {
        //S: "minecraft:string",
        //B: "#minecraft:bundles",
        //L: "minecraft:leather",

    //})

// copper backpack recipe

    event.recipes.create.mixing(
        ['minecraft:netherite_ingot'],
        ['minecraft:netherite_scrap',
        'minecraft:gold_ingot',
        'minecraft:netherite_scrap',
        'minecraft:gold_ingot']
        )
        .superheated()


    event.shaped("artifacts:bunny_hoppers", [
        "F F",
        "HLH",
        "R R"
    ], {
        H: "minecraft:rabbit_hide",
        L: "minecraft:leather_boots",
        R: "minecraft:rabbit_foot",
        F: "minecraft:feather"

    })

    event.shaped("create:rotation_speed_controller", [
        " T ",
        "CPL",
        "BBB"
    ], {
        P: "create:precision_mechanism",
        T: "create:electron_tube",
        B: "create:brass_casing",
        C: "create:cogwheel",
        L: "create:large_cogwheel"
    })

    event.shaped("create:steam_engine", [
        "GCG",
        "AEA",
        " P "
    ], {
        A: "create:andesite_alloy",
        C: "create:cogwheel",
        G: "create:golden_sheet",
        E: "create_sa:hydraulic_engine",
        P: "create:fluid_pipe"
    })    

    event.shaped("simulated:red_portable_engine", [
        "ICI",
        "ASA",
        " B "
    ], {
        A: "simulated:engine_assembly",
        B: "minecraft:blast_furnace",
        S: "create_sa:heat_engine",
        I: "create:iron_sheet",
        C: "create:cogwheel"
    })

    event.smithing(
        'create_sa:netherite_jetpack_chestplate',  // output
        'kubejs:netherite_jetpack_smithing_template', //template
        'minecraft:netherite_chestplate',                  // base item
        'create:netherite_backtank'                 // addition material
    )

    event.smithing(
        'sophisticatedbackpacks:netherite_backpack',  // output
        'kubejs:black_hole_smithing_template',
        'sophisticatedbackpacks:diamond_backpack',
        'minecraft:netherite_ingot'
    )

    event.recipes.create.mechanical_crafting('kubejs:netherite_jetpack_smithing_template', [
        "IENEI",
        "WPBPW",
        "RCGAR",
        "SV LS"
        
    ], {
        A: "create_sa:andesite_jetpack_chestplate",
        B: "create_sa:brass_jetpack_chestplate",
        C: "create_sa:copper_jetpack_chestplate",
        N: "minecraft:netherite_upgrade_smithing_template",
        E: "create:steam_engine",
        G: "simulated:gyroscopic_mechanism",
        S: "aeronautics:smart_propeller",
        P: "simulated:red_portable_engine",
        W: "create:cogwheel",
        L: "create_sa:large_fueling_tank",
        V: "create_sa:large_filling_tank",
        I: "minecraft:netherite_ingot",
        R: "create:rotation_speed_controller"

    })

     

    event.shaped("create_sa:small_filling_tank", [
        " F ",
        "FTF",
        " F "
    ], {
        F: "create:fluid_tank",
        T: "sophisticatedbackpacks:tank_upgrade"
    })
    
    event.shaped("create_sa:small_fueling_tank", [
        "SFS",
        "FTF",
        "SFS"
    ], {
        F: "railways:fuel_tank",
        T: "sophisticatedbackpacks:tank_upgrade",
        S: "create:sturdy_sheet"
    })

    event.shaped("create_sa:medium_filling_tank", [
        " F ",
        "FTF",
        "CFC"
    ], {
        F: "create_dragons_plus:fragile_fluid_tank",
        T: "create_sa:small_filling_tank",
        C: "minecraft:ender_chest"

    })
    
    event.shaped("create_sa:medium_fueling_tank", [
        "SFS",
        "FTF",
        "CFC"
    ], {
        F: "create_dragons_plus:fragile_fluid_tank",
        T: "create_sa:small_fueling_tank",
        S: "create:sturdy_sheet",
        C: "minecraft:ender_chest"
    })

    event.shaped("create_sa:large_filling_tank", [
        "FEF",
        "FTF",
        "FFF"
    ], {
        F: "create_dragons_plus:levitite_fragile_fluid_tank",
        T: "create_sa:medium_filling_tank",
        E: "sophisticatedbackpacks:xp_pump_upgrade"
    })
    
    event.shaped("create_sa:large_fueling_tank", [
        "FEF",
        "FTF",
        "FFF"
    ], {
        F: "create_dragons_plus:levitite_fragile_fluid_tank",
        T: "create_sa:medium_fueling_tank",
        E: "sophisticatedbackpacks:xp_pump_upgrade"
    })


    
    event.shaped("create:mechanical_drill", [
        " D ",
        "ICI",
        "ALA"
    ], {
        D: "minecraft:diamond",
        I: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    event.shaped("create:mechanical_saw", [
        "ISI",
        "SCS",
        "ALA"
    ], {
        I: "create:iron_sheet",
        S: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    // Mechanical Harvester - With Andesite Casings on Bottom
    event.shaped("create:mechanical_harvester", [
        "III",
        "YCY",
        "ALA"
    ], {
        Y: "create:andesite_alloy",
        I: "create:iron_sheet",
        C: "create:cogwheel",
        A: "create:andesite_casing",
        L: "create:large_cogwheel"
    })

    event.shaped("create_mechanical_extruder:mechanical_extruder", [
        "IGI",
        "LCL",
        "ILI"
    ], {
        G: "create:metal_girder",
        I: "create:iron_sheet",
        L: "minecraft:glass",
        C: "create:andesite_casing"

    })

    event.shaped("create:mechanical_crafter", [
        "ZGZ",
        "GCG",
        "ZGZ"
    ], {
        C: "minecraft:crafter",
        G: "create:cogwheel",
        Z: "create:zinc_ingot",

    })

    event.remove({ output: "create:brass_ingot" })
    event.recipes.create.mixing("create:brass_ingot", [
        "minecraft:copper_ingot",
        "create:zinc_ingot"
    ]).heated().superheated()
})