import { useEffect, useState } from 'react'
import transformationIcon from './icons/transformation.svg'
import aiIcon from './icons/ai.svg'
import platformsIcon from './icons/platforms.svg'

function DriveBusinessTransformation() {
  const [showTransformationDetails, setShowTransformationDetails] = useState(false)
  const [activeThirdLayer, setActiveThirdLayer] = useState(null)
  const [activeSecondLayer, setActiveSecondLayer] = useState(null)
  const [showAiDetails, setShowAiDetails] = useState(false)
  const [showPlatformsDetails, setShowPlatformsDetails] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)')
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const getSecondLayerClass = (key) => {
    let base = 'portfolio-card portfolio-card--transformation portfolio-card--level2 portfolio-card--toggle'
    if (!activeSecondLayer) return base
    if (activeSecondLayer === key) return `${base} portfolio-card--active`
    return `${base} portfolio-card--dim`
  }

  const aiKeys = ['ai-foundations', 'ai-ecosystem', 'ai-capitalize']
  const getAiLayerClass = (key) => {
    const base = 'portfolio-card portfolio-card--ai portfolio-card--level2 portfolio-card--toggle'
    const isAiActive = aiKeys.includes(activeThirdLayer)
    if (!isAiActive) return base
    if (activeThirdLayer === key) return `${base} portfolio-card--is-active`
    return `${base} portfolio-card--dim`
  }

  const platformKeys = ['platforms-enterprise', 'platforms-cloud']
  const getPlatformLayerClass = (key) => {
    const base = 'portfolio-card portfolio-card--platforms portfolio-card--level2 portfolio-card--toggle'
    const isPlatformActive = platformKeys.includes(activeThirdLayer)
    if (!isPlatformActive) return base
    if (activeThirdLayer === key) return `${base} portfolio-card--is-active`
    return `${base} portfolio-card--dim`
  }

  return (
    <>
      <div
        className={
          'portfolio-grid' +
          (showTransformationDetails ? ' portfolio-grid--active-transformation' : '') +
          (showAiDetails ? ' portfolio-grid--active-ai' : '') +
          (showPlatformsDetails ? ' portfolio-grid--active-platforms' : '')
        }
      >
        <div
          className={
            'portfolio-card portfolio-card--transformation portfolio-card--transformation-root portfolio-card--toggle' +
            (showTransformationDetails ? ' portfolio-card--is-active' : '')
          }
          onClick={() => {
            const willOpen = !showTransformationDetails
            setShowTransformationDetails(willOpen)
            setActiveSecondLayer(null)
            setActiveThirdLayer(null)
            setShowAiDetails(false)
            setShowPlatformsDetails(false)
          }}
        >
          <img src={transformationIcon} alt="" className="portfolio-card__icon" />
          <h2 className="portfolio-card__title">Drive business transformation</h2>
        </div>
        <div
          className={
            'portfolio-card portfolio-card--ai portfolio-card--toggle' +
            (showAiDetails ? ' portfolio-card--is-active' : '')
          }
          onClick={() => {
            const willOpen = !showAiDetails
            setShowAiDetails(willOpen)
            setShowTransformationDetails(false)
            setActiveSecondLayer(null)
            setActiveThirdLayer(null)
            setShowPlatformsDetails(false)
          }}
        >
          <img src={aiIcon} alt="" className="portfolio-card__icon" />
          <h2 className="portfolio-card__title">Unlock the value of AI</h2>
        </div>
        {isMobile && showAiDetails && (
          <div className="portfolio-subgrid portfolio-grid__subgrid portfolio-grid__subgrid--spaced">
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-foundations')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-foundations' ? null : 'ai-foundations',
                  )
                }}
              >
                <h3 className="portfolio-card__title">Strengthen Data &amp; AI foundations</h3>
              </div>
              {activeThirdLayer === 'ai-foundations' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Define the strategy</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Improve governance</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Be AI responsible by design</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Optimize data architecture and platform
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-ecosystem')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-ecosystem' ? null : 'ai-ecosystem',
                  )
                }}
              >
                <h3 className="portfolio-card__title">Leverage existing data ecosystem</h3>
              </div>
              {activeThirdLayer === 'ai-ecosystem' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Generate insights from IoT data and optimize operations
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Monetize data and services</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Drive strategic decisions with intelligent insights
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-capitalize')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-capitalize' ? null : 'ai-capitalize',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Capitalize on the potential of AI
                </h3>
              </div>
              {activeThirdLayer === 'ai-capitalize' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Ignite awareness and innovate</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Design and prove AI value</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Empower workforce with Generative AI
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Scale AI across enterprise</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={
            'portfolio-card portfolio-card--platforms portfolio-card--toggle' +
            (showPlatformsDetails ? ' portfolio-card--is-active' : '')
          }
          onClick={() => {
            const willOpen = !showPlatformsDetails
            setShowPlatformsDetails(willOpen)
            setShowTransformationDetails(false)
            setShowAiDetails(false)
            setActiveSecondLayer(null)
            setActiveThirdLayer(null)
          }}
        >
          <img src={platformsIcon} alt="" className="portfolio-card__icon" />
          <h2 className="portfolio-card__title">
            Maximize the potential of platforms &amp; hyperscalers
          </h2>
        </div>
        {isMobile && showPlatformsDetails && (
          <div className="portfolio-subgrid portfolio-grid__subgrid portfolio-grid__subgrid--spaced">
            <div className="portfolio-subgrid__item">
              <div
                className={getPlatformLayerClass('platforms-enterprise')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'platforms-enterprise' ? null : 'platforms-enterprise',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Maximize potential of Enterprise platforms
                </h3>
              </div>
              {activeThirdLayer === 'platforms-enterprise' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Provide strategic platform advisory</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Transform Customer, Service, and Operations
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Exploit the platform investment</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getPlatformLayerClass('platforms-cloud')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'platforms-cloud' ? null : 'platforms-cloud',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Maximize potential of cloud hyperscalers
                </h3>
              </div>
              {activeThirdLayer === 'platforms-cloud' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Define the cloud strategy and architecture
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Evaluate hyperscalers providers</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Exploit the hyperscalers</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {showTransformationDetails && (
          <div className="portfolio-subgrid portfolio-grid__subgrid">
            <div className="portfolio-subgrid__item">
              <div
                className={getSecondLayerClass('strategy')}
                onClick={() => {
                  setActiveSecondLayer((prev) => (prev === 'strategy' ? null : 'strategy'))
                  setActiveThirdLayer((prev) => (prev === 'strategy' ? null : 'strategy'))
                }}
              >
                <h3 className="portfolio-card__title">Define the strategy</h3>
              </div>
              {activeThirdLayer === 'strategy' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Digital (Business)</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">IT (technology)</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Future of work</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Organizational change</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Data &amp; AI</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Platforms</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Digital Sovereignty</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getSecondLayerClass('enable')}
                onClick={() => {
                  setActiveSecondLayer((prev) => (prev === 'enable' ? null : 'enable'))
                  setActiveThirdLayer((prev) => (prev === 'enable' ? null : 'enable'))
                }}
              >
                <h3 className="portfolio-card__title">Enable transformation success</h3>
              </div>
              {activeThirdLayer === 'enable' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">CIO Advisory</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Realize business case</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Enable organizational change</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Advise and deliver transformation</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getSecondLayerClass('drive')}
                onClick={() => {
                  setActiveSecondLayer((prev) => (prev === 'drive' ? null : 'drive'))
                  setActiveThirdLayer((prev) => (prev === 'drive' ? null : 'drive'))
                }}
              >
                <h3 className="portfolio-card__title">Drive digital excellence</h3>
              </div>
              {activeThirdLayer === 'drive' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Transform operations/ functions</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">
                      Grow through excellence in experience
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Enable digital innovation</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getSecondLayerClass('unlock')}
                onClick={() => {
                  setActiveSecondLayer((prev) => (prev === 'unlock' ? null : 'unlock'))
                  setActiveThirdLayer((prev) => (prev === 'unlock' ? null : 'unlock'))
                }}
              >
                <h3 className="portfolio-card__title">Unlock potential of technology</h3>
              </div>
              {activeThirdLayer === 'unlock' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Achieve IT operational excellence</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Architect digital business</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getSecondLayerClass('future')}
                onClick={() => {
                  setActiveSecondLayer((prev) => (prev === 'future' ? null : 'future'))
                  setActiveThirdLayer((prev) => (prev === 'future' ? null : 'future'))
                }}
              >
                <h3 className="portfolio-card__title">Shape the future of work</h3>
              </div>
              {activeThirdLayer === 'future' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">Define Future of work</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--transformation portfolio-card--level3 portfolio-card--is-active">
                    <h3 className="portfolio-card__title">
                      Deliver and embed workplace solutions
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {!isMobile && showAiDetails && (
        <>
          <div className="portfolio-subgrid portfolio-grid__subgrid portfolio-grid__subgrid--spaced">
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-foundations')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-foundations' ? null : 'ai-foundations',
                  )
                }}
              >
                <h3 className="portfolio-card__title">Strengthen Data &amp; AI foundations</h3>
              </div>
              {activeThirdLayer === 'ai-foundations' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Define the strategy</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Improve governance</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Be AI responsible by design</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Optimize data architecture and platform
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-ecosystem')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-ecosystem' ? null : 'ai-ecosystem',
                  )
                }}
              >
                <h3 className="portfolio-card__title">Leverage existing data ecosystem</h3>
              </div>
              {activeThirdLayer === 'ai-ecosystem' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Generate insights from IoT data and optimize operations
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Monetize data and services</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Drive strategic decisions with intelligent insights
                    </h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getAiLayerClass('ai-capitalize')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'ai-capitalize' ? null : 'ai-capitalize',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Capitalize on the potential of AI
                </h3>
              </div>
              {activeThirdLayer === 'ai-capitalize' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Ignite awareness and innovate</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Design and prove AI value</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Empower workforce with Generative AI
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--ai portfolio-card--level3">
                    <h3 className="portfolio-card__title">Scale AI across enterprise</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {!isMobile && showPlatformsDetails && (
        <>
          <div className="portfolio-subgrid portfolio-grid__subgrid portfolio-grid__subgrid--spaced">
            <div className="portfolio-subgrid__item">
              <div
                className={getPlatformLayerClass('platforms-enterprise')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'platforms-enterprise' ? null : 'platforms-enterprise',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Maximize potential of Enterprise platforms
                </h3>
              </div>
              {activeThirdLayer === 'platforms-enterprise' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Provide strategic platform advisory</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Transform Customer, Service, and Operations
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Exploit the platform investment</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="portfolio-subgrid__item">
              <div
                className={getPlatformLayerClass('platforms-cloud')}
                onClick={() => {
                  setActiveThirdLayer((prev) =>
                    prev === 'platforms-cloud' ? null : 'platforms-cloud',
                  )
                }}
              >
                <h3 className="portfolio-card__title">
                  Maximize potential of cloud hyperscalers
                </h3>
              </div>
              {activeThirdLayer === 'platforms-cloud' && (
                <div className="portfolio-thirdgrid portfolio-thirdgrid--inline">
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">
                      Define the cloud strategy and architecture
                    </h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Evaluate hyperscalers providers</h3>
                  </div>
                  <div className="portfolio-card portfolio-card--platforms portfolio-card--level3">
                    <h3 className="portfolio-card__title">Exploit the hyperscalers</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default DriveBusinessTransformation
