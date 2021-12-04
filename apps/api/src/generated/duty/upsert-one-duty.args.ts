import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { DutyCreateInput } from './duty-create.input';
import { DutyUpdateInput } from './duty-update.input';

@ArgsType()
export class UpsertOneDutyArgs {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;

    @Field(() => DutyCreateInput, {nullable:false})
    create!: DutyCreateInput;

    @Field(() => DutyUpdateInput, {nullable:false})
    update!: DutyUpdateInput;
}
