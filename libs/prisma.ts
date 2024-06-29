import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// to know connection status
const initializePrisma = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Error connecting to the database!');
    console.error(error);
  }
};

initializePrisma();

export default prisma;
