import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
    @Prop({ required: true })
    userId: string;
    
    @Prop({ required: true })
    placeId: string;
    
    @Prop({ required: true })
    startDate: Date;
    
    @Prop({ required: true })
    endDate: Date;
    
    @Prop({ default: false })
    invoiceId: string;
    timestamp: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument);