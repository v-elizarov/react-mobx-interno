export default interface IFilter {
  toggleFilter: (category: string) => void
  emptyFilter: () => void
}