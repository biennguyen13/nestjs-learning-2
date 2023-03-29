import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  signup() {
    return 'signup';
  }
  signin() {
    return 'signin';
  }
}
