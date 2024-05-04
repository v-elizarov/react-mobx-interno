import { IProjectItem } from '@/types/project-item'
import AbstractStore from './AbstractStore'
import { projects } from '@assets/data.json'
import { action, makeObservable } from 'mobx'


class ProjectStore extends AbstractStore<IProjectItem> {
  constructor(projects: IProjectItem[], filter: string[]) {
    super(projects, filter)
    makeObservable(this, {
      toggleFavorite: action
    })
  }

  toggleFilter(category: string) {
    super.emptyFilter()
    super.toggleFilter(category)
  }

  toggleFavorite(id: string) {
    const index = super.getIndexOfItemByID(id)
    const project = super.getItem(index)
    project.isFavorite = !project.isFavorite
    super.changeItemByIndex(index, project)
  }
}

export default new ProjectStore(projects, ['Bedroom'])