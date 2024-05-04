export default interface IDataBehavior<T> {
  addItem: (item: T) => void
  getIndexOfItemByID: (id: string) => number
  getItem: (index: number) => T
  changeItemByIndex: (index: number, item: T) => void
}