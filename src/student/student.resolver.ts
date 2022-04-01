import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  lesson(@Args('id') id: string): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Query((returns) => [StudentType])
  async students(): Promise<Student[]> {
    return await this.studentService.findAll();
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
