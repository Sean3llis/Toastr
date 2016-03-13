export default function(){
  Velocity.RegisterEffect('handle:down', {
    defaultDuration: 500,
    calls: [
      [ { translateY: '180px' }, 1, { easing: [200, 10 ]} ],
    ]
  });

  Velocity.RegisterEffect('handle:up', {
    defaultDuration: 500,
    calls: [
      [ { translateY: '0px' }, 1, { easing: [200, 10 ]} ],
    ]
  });
}
