import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationDocument } from "./reservations/models/reservation.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationDocument>{
    protected readonly logger = new Logger(ReservationRepository.name);
    constructor(
        @InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>,
    ){
        super(reservationModel);
        this.logger.log('ReservationRepository initialized');
    }

}