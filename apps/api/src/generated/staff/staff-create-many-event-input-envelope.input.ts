import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateManyEventInput } from './staff-create-many-event.input';

@InputType()
export class StaffCreateManyEventInputEnvelope {

    @Field(() => [StaffCreateManyEventInput], {nullable:false})
    data!: Array<StaffCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
