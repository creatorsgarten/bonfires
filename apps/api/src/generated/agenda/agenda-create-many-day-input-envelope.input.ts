import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgendaCreateManyDayInput } from './agenda-create-many-day.input';

@InputType()
export class AgendaCreateManyDayInputEnvelope {

    @Field(() => [AgendaCreateManyDayInput], {nullable:false})
    data!: Array<AgendaCreateManyDayInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
