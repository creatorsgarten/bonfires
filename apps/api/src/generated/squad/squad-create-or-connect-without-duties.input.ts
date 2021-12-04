import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadCreateWithoutDutiesInput } from './squad-create-without-duties.input';

@InputType()
export class SquadCreateOrConnectWithoutDutiesInput {

    @Field(() => SquadWhereUniqueInput, {nullable:false})
    where!: SquadWhereUniqueInput;

    @Field(() => SquadCreateWithoutDutiesInput, {nullable:false})
    create!: SquadCreateWithoutDutiesInput;
}
