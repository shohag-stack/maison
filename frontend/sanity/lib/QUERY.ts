export const MENU_QUERY = `*[_type == "menuSection"] | order(title asc) {
_id,
  title,
  subtitle,
  items[]{
    name,
    description,
    price,
    thumbnail{
    asset->{
      url
    }},
    dietary
  }
}`



export const GALLERY_QUERY = `
*[_type == "gallery"][0]{
  _id,
  title,
  images[]{
    _key,
    alt,
    caption,
    category,
    image{
      asset->{
        _id,
        url
      }
    }
  }
}
`