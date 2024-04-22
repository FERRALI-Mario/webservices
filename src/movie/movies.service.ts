import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { UpdateMovieDto } from './dto/update-movie.dto';
  import { Movie } from './entities/movie.entity';
  
  @Injectable()
  export class MoviesService {
    constructor(
      @InjectRepository(Movie)
      private moviesRepository: Repository<Movie>,
    ) {}

    async create(id: string, UpdateMovieDto: UpdateMovieDto): Promise<void> {
      const movie = await this.moviesRepository.findOneBy({
        id: id,
      });
      if (movie) {
        throw new NotFoundException('Movie already exists');
      }
      await this.moviesRepository.save(UpdateMovieDto);
    }
  
    async update(id: string, UpdateMovieDto: UpdateMovieDto): Promise<Movie> {
      const movie = await this.moviesRepository.findOneBy({
        id: id,
      });
      if (!movie) {
        throw new NotFoundException('Movie not found');
      }
      if (UpdateMovieDto.name) {
        const existingMovie = await this.moviesRepository.findOneBy({
          name: UpdateMovieDto.name,
        });
        if (existingMovie) {
          throw new BadRequestException('Error updating movie');
        }
      }
      if (UpdateMovieDto.description) {
        const existingMovie = await this.moviesRepository.findOneBy({
          description: UpdateMovieDto.description,
        });
        if (existingMovie) {
          throw new BadRequestException('Error updating movie');
        }
      }
      if (UpdateMovieDto.date) {
        const existingMovie = await this.moviesRepository.findOneBy({
          date: UpdateMovieDto.date,
        });
        if (existingMovie) {
          throw new BadRequestException('Error updating movie');
        }
      }
      if (UpdateMovieDto.note) {
        const existingMovie = await this.moviesRepository.findOneBy({
          note: UpdateMovieDto.note,
        });
        if (existingMovie) {
          throw new BadRequestException('Error updating movie');
        }
      }
      await this.moviesRepository.update(id, UpdateMovieDto);
      Object.assign(movie, UpdateMovieDto);
      return movie;
    }
  
    async findOne(id: string): Promise<Movie> {
      const movie = await this.moviesRepository.findOneBy({
        id: id,
      });
      if (!movie) {
        throw new NotFoundException('Movie not found');
      }
  
      return movie;
    }

    async delete(id: string): Promise<void> {
      const movie = await this.moviesRepository.findOneBy({
        id: id,
      });
      if (!movie) {
        throw new NotFoundException('Movie not found');
      }
      await this.moviesRepository.remove(movie);
    }
  }
  