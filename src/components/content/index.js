import { Redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

const RecommendLazy = lazy(() => import('../../views/recommend/index'))
const AlbumLazy = lazy(() => import('../../views/album'))
const SearchLazy = lazy(() => import('../../views/search'))
const VideoLazy = lazy(() => import('../../views/Video'))

const Content = () => {
  return (
    <div className="bg-black">
      <Suspense fallback={null}>
        <CacheSwitch>
          <CacheRoute
            path="/"
            exact
            render={() => <Redirect to="/recommend" />}
          />
          <CacheRoute path="/recommend" component={RecommendLazy} />
          <CacheRoute path="/video" component={VideoLazy} />
          <CacheRoute path="/album/:id" component={AlbumLazy} />
          <CacheRoute path="/search" component={SearchLazy} />
        </CacheSwitch>
      </Suspense>
    </div>
  )
}

export default Content
