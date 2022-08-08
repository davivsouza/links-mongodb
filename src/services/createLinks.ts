import { Link } from "../models/Link"

export function createLinks(){

  const link = new Link({
    title: "YouTube",
    url: "https://youtube.com",
    slug: "YouTube"
  })
  
  link.save()
}