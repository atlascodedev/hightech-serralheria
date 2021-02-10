export interface PortfolioItem {
  portfolioItemPicture: string
}

export type PortfolioItemList = {
  portfolioList: Array<PortfolioItem>
}

export interface ServiceItem {
  serviceItemPicture: string
  serviceItemDescription: string
  serviceItemTitle: string
}

export type ServiceItemList = {
  serviceList: Array<ServiceItem>
}
