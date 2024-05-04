import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import CategoryPicker from '@components/CategoryPicker'
import { projectCategories } from '@assets/data.json'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import InfiniteProjectList from '@/modules/InfiniteProjectList'
import SiteContainer from '@/components/SiteContainer'


export interface IProjectPageProps {}

const ProjectPage: React.FC<IProjectPageProps> = () => {
  const { ProjectStore } = useStore() 
  const headerImageURL = new URL('../../assets/images/banners/banner2.jpg', import.meta.url)

  return (
    <React.Fragment>
      <Header>
        <Banner 
            imageURL={headerImageURL}
            showPanel
            heading='Our Projects'
            level={1}
            headingClassNames={['heading-m']}
        />
      </Header>
      <SiteContainer classNames={['gallery-area']}>
        <CategoryPicker
          categories={projectCategories}
          type='radio'
          name='project-filter'
          ownClassNames={['gallery__filter']}
          onPressHandler={(category) => ProjectStore.toggleFilter(category)}
          filter={ProjectStore.filter}
        />
        <InfiniteProjectList projects={ProjectStore.filteredData}/>   
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default observer(ProjectPage) 