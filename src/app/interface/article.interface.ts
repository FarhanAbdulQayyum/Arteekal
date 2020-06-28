export interface IArticle {
    authorId: string,
    authorName: string
    folderId?: string, 
    image: string, 
    content: string,
    title: string,
    searchtTags?: string [], 
    comments?: string [], 
    likes?: number, 
    views?: number, 
    lastupdated?: string, 
    createdAt?: string,
}