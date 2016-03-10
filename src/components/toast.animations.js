export default function(){
  // NOOP
  Velocity.RegisterEffect('toast:bread', {
    defaultDuration: 0,
    calls: [
      [ { translateY: '0px' }, 1 ],
    ]
  });

  Velocity.RegisterEffect('toast:ready', {
      defaultDuration: 900,
      calls: [
          [ { translateY: '200px' }, 1 ],
      ]
  });

  Velocity.RegisterEffect('toast:toasting', {
      defaultDuration: 500,
      calls: [
          [ { translateY: '300px' }, 1, { easing: [200, 10]} ],
      ]
  });

  Velocity.RegisterEffect('toast:browning', {
      defaultDuration: 4000,
      calls: [
          [ { fill: '#D1AF8C' }, 1 ],
      ]
  });
}
