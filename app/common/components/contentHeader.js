/*  Components are used to reuse code stretch */

angular.module('primeiraApp').component('contentHeader', { // contentHeader as camelCase here and as dash inside dashboard.html (content-header) 
    bindings: { // set needed parameters. Can be used any name
        name: '@',
        small: '@',
    },
    template: `
    <section class="content-header">
      <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
    </section>
    ` // {{ $ctrl.variable_defined_below }}
})