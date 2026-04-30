StartupEvents.registry('item', event => {

  event.create('kubejs:incomplete_angler_template').displayName('Incomplete Angler Template');
  event.create('kubejs:incomplete_archer_template').displayName('Incomplete Archer Template');
  event.create('kubejs:incomplete_blade_template').displayName('Incomplete Blade Template');
  event.create('kubejs:incomplete_brewer_template').displayName('Incomplete Brewer Template');
  event.create('kubejs:incomplete_burn_template').displayName('Incomplete Burn Template');
  event.create('kubejs:incomplete_danger_template').displayName('Incomplete Danger Template');
  event.create('kubejs:incomplete_flow_template').displayName('Incomplete Flow Template');
  event.create('kubejs:incomplete_explorer_template').displayName('Incomplete Explorer Template');
  event.create('kubejs:incomplete_friend_template').displayName('Incomplete Friend Template');
  event.create('kubejs:incomplete_guster_template').displayName('Incomplete Guster Template');
  event.create('kubejs:incomplete_heart_template').displayName('Incomplete Heart Template');
  event.create('kubejs:incomplete_howl_template').displayName('Incomplete Howl Template');
  event.create('kubejs:incomplete_miner_template').displayName('Incomplete Miner Template');
  event.create('kubejs:incomplete_mourner_template').displayName('Incomplete Mourner Template');
  event.create('kubejs:incomplete_plenty_template').displayName('Incomplete Plenty Template');
  event.create('kubejs:incomplete_prize_template').displayName('Incomplete Prize Template');
  event.create('kubejs:incomplete_shelter_template').displayName('Incomplete Shelter Template');
  event.create('kubejs:incomplete_skull_template').displayName('Incomplete Skull Template');
  event.create('kubejs:incomplete_snort_template').displayName('Incomplete Snort Template');
  event.create('kubejs:netherite_jetpack_smithing_template')
        .displayName('Netherite Jetpack Smithing Template')
        .maxStackSize(1);
  event.create('black_hole_smithing_template')
        .displayName('Black Hole Smithing Template')
        .maxStackSize(1);
  event.create('kubejs:tangled_nether_vines').displayName('Tangled Nether Vines');
  event.create('kubejs:eclipse_chainsaw', 'sword')
      .displayName('Eclipse Chainsaw')
      .tier('diamond')
      .attackDamageBaseline(5.0)
      .speed(1.6);

});
