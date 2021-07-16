interface Data {
  id: number,
  name: string,
  slug: string,
  image_url: string,
}

interface ReturnSnakeCase {
  id: number,
  name: string,
  slug: string,
  imageUrl: string,
}

interface DataDescription {
  id: number,
  name: string,
  slug: string,
  image_url: string,
  description: string,
}

interface ReturnSnakeCaseDescription {
  id: number,
  name: string,
  slug: string,
  imageUrl: string,
  description: string,
}

export function toSnakeCase(data: Data[]): ReturnSnakeCase[] {
  return data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      slug: el.slug,
      imageUrl: el.image_url,
    }
  })
}

export function toSnakeCaseDescription(data: DataDescription): ReturnSnakeCaseDescription {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    imageUrl: data.image_url,
    description: data.description,
  }
}