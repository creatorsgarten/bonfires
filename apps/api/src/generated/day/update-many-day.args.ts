import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DayUpdateManyMutationInput } from './day-update-many-mutation.input';
import { DayWhereInput } from './day-where.input';

@ArgsType()
export class UpdateManyDayArgs {

    @Field(() => DayUpdateManyMutationInput, {nullable:false})
    data!: DayUpdateManyMutationInput;

    @Field(() => DayWhereInput, {nullable:true})
    where?: DayWhereInput;
}
