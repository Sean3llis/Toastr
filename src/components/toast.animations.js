export default function(){
  Velocity.RegisterEffect('toast:ready', {
      defaultDuration: 900,
      calls: [
          [ { translateY: '200px' }, 1 ],
      ]
  });

  // NOOP
  Velocity.RegisterEffect('toast:bread', {
      defaultDuration: 0,
      calls: [
          [ { translateY: '0px' }, 1 ],
      ]
  });
}
