import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findById(id: string): Promise<Student> {
    return await this.studentRepository.findOne({
      where: { id },
    });
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    return await this.studentRepository.save({
      id: uuidv4(),
      firstName,
      lastName,
    });
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return await this.studentRepository.find({
      where: { id: { $in: studentIds } },
    });
  }
}
