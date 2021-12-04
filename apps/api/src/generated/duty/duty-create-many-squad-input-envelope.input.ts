import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DutyCreateManySquadInput } from './duty-create-many-squad.input';

@InputType()
export class DutyCreateManySquadInputEnvelope {

    @Field(() => [DutyCreateManySquadInput], {nullable:false})
    data!: Array<DutyCreateManySquadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
