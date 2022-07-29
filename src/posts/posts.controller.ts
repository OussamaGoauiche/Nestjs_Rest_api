/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PostModel } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    @Get()
    @ApiOkResponse({ description: 'Posts retrieved successfully.'})
    public findAll(): Array<PostModel> {
    return this.postsService.findAll();
}
    @ApiOkResponse({ description: 'Post retrieved successfully.'})
    @ApiNotFoundResponse({ description: 'Post not found.' })
    public findOne(@Param('id', ParseIntPipe) id: number): PostModel {
  return this.postsService.findOne(id);
}
    @Post()
public create(@Body() post: PostModel): PostModel {
  return this.postsService.create(post);
}
    @ApiOkResponse({ description: 'Post deleted successfully.'})
    @ApiNotFoundResponse({ description: 'Post not found.' })
    @Delete(':id')
public delete(@Param('id', ParseIntPipe) id: number): void {  
  this.postsService.delete(id);
}
}
