import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyUpdateInput } from './duty-update.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';

@ArgsType()
export class UpdateOneDutyArgs {

    @Field(() => DutyUpdateInput, {nullable:false})
    data!: DutyUpdateInput;

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;
}
