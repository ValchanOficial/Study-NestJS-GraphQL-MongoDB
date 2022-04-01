import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Lesson } from './lesson.entity';
import { AssignStudentToLessonInput, CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async findAll(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async findById(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({
      where: { id },
    });
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuidv4(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonRepository.save(lesson);
  }

  async assignStudentToLesson(
    assignStudentToLessonInput: AssignStudentToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentToLessonInput;
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return await this.lessonRepository.save(lesson);
  }
}
