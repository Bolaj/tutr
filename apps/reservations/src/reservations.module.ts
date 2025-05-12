import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './reservations/models/reservation.schema';
import { ReservationRepository } from './reservation.repository';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFuture([{ 
    name: ReservationDocument.name,
    schema: ReservationSchema
  }]),
  LoggerModule,
],

  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepository],
})
export class ReservationsModule {}
