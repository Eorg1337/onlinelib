interface Authors {
  name: string
}

export interface BookPropsInit {
  author_name: string
  first_publish_year: number
  cover_edition_key?: string
  title: string
  authors: Authors[]
}

export interface BookProps {
  key: string | number
  name: string
  author: string
  year: number
  cover?: string
  price: number
  uniq_key: string | number
  handleAddFavoriteBook?: () => void
  isFav?: boolean
  count?: number
}

export type CombinedProps = BookProps & {
  render: (
    data: BookProps,
    onFav: (isFav: boolean) => void,
    onBusket: (isBusket: boolean) => void,
    onActive: () => void,
    isBusket: boolean,
    isFavorite: boolean
  ) => JSX.Element
}

export interface BtnProps {
  text: string
  onClick: () => void
  children?: JSX.Element
  customClass?: string
}

export interface FilterProps {
  type: string
  name: string
  placeholder: string
}
