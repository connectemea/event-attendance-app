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
    console.log('\nConnected to the database!\n');
  } catch (error) {
    console.error('Error connecting to the database!\n');
    console.error(error);
    console.error('End of Database error\n');
  }
};

initializePrisma();

export default prisma;
