import { action, computed, makeObservable, observable } from 'mobx'
import IDataBehavior from './IDataBehavior'
import IFilter from './IFilter'


export default class AbstractStore<T> implements IFilter, IDataBehavior<T> {
  data: T[] = []
  filter: string[] = []

  get filteredData() {
    if (this.filter.length === 0) {
      return this.data
    }
    return this.data.filter(item => this.filter.indexOf((item as any).category) !== -1)
  }

  constructor(data: T[], filter: string[]) {
    if (this.constructor == AbstractStore) {
      throw new Error('Abstract classes can\'t be instantiated.')
    }
    this.data = data
    this.filter = filter
    makeObservable(this, {
      data: observable,
      filter: observable,
      filteredData: computed,
      toggleFilter: action,
      emptyFilter: action,
      addItem: action
    })
  }

  toggleFilter(category: string) {
    const index = this.filter.indexOf(category)
    if (index !== -1) {
      // toggle down
      this.filter.splice(index, 1)
    } else {
      // toggle up
      this.filter.push(category)
    }
  }

  emptyFilter() {
    this.filter = []
  }

  addItem(item: T) {
    this.data = [item, ...this.data]
  }

  getIndexOfItemByID(id: string) {
    return this.data.findIndex(item => (item as any).id === id)
  }

  getItem(index: number) {
    return this.data[index]
  }

  changeItemByIndex(index: number, item: T){
    this.data[index] = item
  }
}