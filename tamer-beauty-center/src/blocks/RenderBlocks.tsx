import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ExpertsOrbitBlock } from '@/blocks/ExpertsOrbit/Component'
import { ServicesGridBlock } from '@/blocks/ServicesGrid/Component'
import { OffersBlockComponent } from '@/blocks/OffersBlock/Component'
import { ServicesCatalogBlock } from '@/blocks/ServicesCatalog/Component'
import { GroomJourneyBlock } from '@/blocks/GroomJourney/Component'
import { AcademyGridBlock } from '@/blocks/AcademyGrid/Component'
import { StoreShowcaseBlock } from '@/blocks/StoreShowcase/Component'
import { ReviewsBlockComponent } from '@/blocks/ReviewsBlock/Component'
import { LocationContactComponent } from '@/blocks/LocationContact/Component'
import { WhyChooseUsBlock } from '@/blocks/WhyChooseUs/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  expertsOrbit: ExpertsOrbitBlock,
  servicesGrid: ServicesGridBlock,
  offersBlock: OffersBlockComponent,
  servicesCatalog: ServicesCatalogBlock,
  groomJourney: GroomJourneyBlock,
  academyGrid: AcademyGridBlock,
  storeShowcase: StoreShowcaseBlock,
  reviewsBlock: ReviewsBlockComponent,
  locationContact: LocationContactComponent,
  whyChooseUs: WhyChooseUsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
