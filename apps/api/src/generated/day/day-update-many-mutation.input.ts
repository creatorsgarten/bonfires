import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DayUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;
}
