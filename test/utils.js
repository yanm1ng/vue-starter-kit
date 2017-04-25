import Vue from 'vue'

export function getRenderedVm(Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm;
}